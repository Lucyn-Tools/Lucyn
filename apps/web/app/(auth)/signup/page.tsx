import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-accent-purple font-semibold text-lg">✦ Lucyn</span>
          <p className="text-text-secondary text-sm mt-1">AI Product Engineer</p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
