import os
import httpx
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("telegram")

BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
DEFAULT_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "")
BASE_URL = f"https://api.telegram.org/bot{BOT_TOKEN}"


def _api(endpoint: str, payload: dict) -> dict:
    if not BOT_TOKEN:
        raise ValueError("TELEGRAM_BOT_TOKEN env var is not set")
    with httpx.Client(timeout=15) as client:
        r = client.post(f"{BASE_URL}/{endpoint}", json=payload)
        r.raise_for_status()
        return r.json()


@mcp.tool()
def send_message(text: str, chat_id: str = "", parse_mode: str = "HTML") -> dict:
    """
    Send a text message to a Telegram channel or group.

    Args:
        text: The message content. Supports HTML formatting (<b>, <i>, <code>, <a href>).
        chat_id: Target channel or group (e.g. @botico_channel or a numeric ID).
                 Falls back to TELEGRAM_CHAT_ID env var if not provided.
        parse_mode: "HTML" (default) or "Markdown".
    """
    target = chat_id or DEFAULT_CHAT_ID
    if not target:
        raise ValueError("chat_id must be provided or TELEGRAM_CHAT_ID env var must be set")
    result = _api("sendMessage", {"chat_id": target, "text": text, "parse_mode": parse_mode})
    if result.get("ok"):
        msg = result["result"]
        return {"success": True, "message_id": msg["message_id"], "chat": msg["chat"].get("title") or msg["chat"].get("username")}
    return {"success": False, "error": result.get("description")}


@mcp.tool()
def send_photo(photo_url: str, caption: str = "", chat_id: str = "") -> dict:
    """
    Send a photo with an optional caption to a Telegram channel.

    Args:
        photo_url: Public URL of the image to send.
        caption: Optional caption text (HTML supported).
        chat_id: Target channel or group. Falls back to TELEGRAM_CHAT_ID env var.
    """
    target = chat_id or DEFAULT_CHAT_ID
    if not target:
        raise ValueError("chat_id must be provided or TELEGRAM_CHAT_ID env var must be set")
    payload = {"chat_id": target, "photo": photo_url, "parse_mode": "HTML"}
    if caption:
        payload["caption"] = caption
    result = _api("sendPhoto", payload)
    if result.get("ok"):
        return {"success": True, "message_id": result["result"]["message_id"]}
    return {"success": False, "error": result.get("description")}


@mcp.tool()
def get_bot_info() -> dict:
    """
    Verify the bot token is valid and return bot details (name, username).
    Use this to confirm the Telegram connection is working.
    """
    if not BOT_TOKEN:
        return {"success": False, "error": "TELEGRAM_BOT_TOKEN is not set"}
    result = _api("getMe", {})
    if result.get("ok"):
        bot = result["result"]
        return {"success": True, "name": bot["first_name"], "username": bot["username"], "id": bot["id"]}
    return {"success": False, "error": result.get("description")}


@mcp.tool()
def get_chat_info(chat_id: str = "") -> dict:
    """
    Get info about a channel or group — confirms the bot has access to post there.

    Args:
        chat_id: Channel username (e.g. @botico_channel) or numeric ID.
                 Falls back to TELEGRAM_CHAT_ID env var.
    """
    target = chat_id or DEFAULT_CHAT_ID
    if not target:
        raise ValueError("chat_id must be provided or TELEGRAM_CHAT_ID env var must be set")
    result = _api("getChat", {"chat_id": target})
    if result.get("ok"):
        chat = result["result"]
        return {"success": True, "title": chat.get("title"), "type": chat.get("type"), "username": chat.get("username"), "id": chat.get("id")}
    return {"success": False, "error": result.get("description")}


if __name__ == "__main__":
    mcp.run()
