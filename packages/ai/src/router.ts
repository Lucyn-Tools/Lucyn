// Routes requests to the appropriate Claude model based on complexity.

export type ModelTier = "fast" | "smart" | "reasoning";

export interface RoutingDecision {
  model: string;
  tier: ModelTier;
  reason: string;
}

const MODELS: Record<ModelTier, string> = {
  fast: "claude-haiku-4-5",
  smart: "claude-sonnet-4-5",
  reasoning: "claude-opus-4-5",
};

const FAST_PATTERNS = [
  /^(what is|who is|when did|how many|list|show me|get me)\b/i,
  /^\s*(yes|no|ok|sure)\s*$/i,
];

const REASONING_PATTERNS = [
  /\b(assign|allocate|plan|decide|recommend|should we)\b/i,
  /\b(complex|difficult|tricky|architecture|strategy)\b/i,
];

export function routeRequest(query: string): RoutingDecision {
  if (FAST_PATTERNS.some((p) => p.test(query))) {
    return { model: MODELS.fast, tier: "fast", reason: "simple lookup pattern" };
  }

  if (REASONING_PATTERNS.some((p) => p.test(query))) {
    return { model: MODELS.reasoning, tier: "reasoning", reason: "complex reasoning required" };
  }

  return { model: MODELS.smart, tier: "smart", reason: "default analysis model" };
}
