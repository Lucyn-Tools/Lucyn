# @lucyn-tools/compression

LucynCompress — token compression layer for all AI inputs.

Reduces token usage by converting HTML to Markdown, shortening URLs, removing non-ASCII noise, and compressing repetitive content.

## Exports

- `compress(input: string): string` — general text compression
- `compressHtml(html: string): string` — HTML → clean Markdown
- `estimateTokens(text: string): number` — approximate token count
