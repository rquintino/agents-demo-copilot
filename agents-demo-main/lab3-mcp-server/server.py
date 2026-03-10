"""
GenAI & AI Agents — Lab 3: Your First MCP Server
=====================================================
This is a minimal MCP server built with FastMCP.
It exposes tools that GitHub Copilot (or any MCP client) can discover and use.

Run: python3 server.py
Then connect via VS Code MCP configuration (.vscode/mcp.json)

YOUR MISSION: Add more tools! Ideas:
- company_lookup: return mock company data
- currency_convert: convert between currencies
- sentiment_analyze: analyze text sentiment
"""

from fastmcp import FastMCP

# Create the MCP server
mcp = FastMCP("Lab Server")


@mcp.tool
def greet(name: str) -> str:
    """Say hello to someone. Use this to verify the MCP connection works."""
    return f"👋 Hello, {name}! Your MCP server is working."


@mcp.tool
def calculate_discount(price: float, discount_percent: float) -> dict:
    """Calculate the final price after applying a discount.

    Args:
        price: Original price in euros
        discount_percent: Discount percentage (0-100)
    """
    if discount_percent < 0 or discount_percent > 100:
        return {"error": "Discount must be between 0 and 100"}

    discount_amount = price * (discount_percent / 100)
    final_price = price - discount_amount

    return {
        "original_price": price,
        "discount_percent": discount_percent,
        "discount_amount": round(discount_amount, 2),
        "final_price": round(final_price, 2),
        "currency": "EUR"
    }


@mcp.tool
def generate_invoice_number() -> str:
    """Generate a unique invoice number for a new order."""
    import random
    import datetime
    today = datetime.date.today()
    seq = random.randint(1000, 9999)
    return f"INV-{today.strftime('%Y%m%d')}-{seq}"


# ──────────────────────────────────────────
# 👇 ADD YOUR OWN TOOLS BELOW THIS LINE 👇
# ──────────────────────────────────────────




# Run the server
if __name__ == "__main__":
    mcp.run()
