# @lucyn-tools/ai

Claude reasoning, RAG pipeline, embeddings, and model routing for Lucyn.

## What's in here

- `chat.ts` — Streaming chatbot inference (claude-sonnet-4-20250514)
- `rag.ts` — Retrieval-augmented generation via pgvector similarity search
- `embeddings.ts` — Embedding generation (batched)
- `chunking.ts` — Semantic chunking for code and text
- `summarizer.ts` — Sprint, developer, and repo summaries
- `router.ts` — Routes tasks to fast/smart/reasoning model tiers

## Model routing

| Task | Model |
|---|---|
| Simple lookups, status checks | claude-haiku-4-5 |
| Analysis, feedback, summaries | claude-sonnet-4-20250514 |
| Task assignment, complex reasoning | claude-sonnet-4-20250514 (extended thinking) |
