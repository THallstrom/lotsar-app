import Button from "./Button";

export default function AuthActions() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Button variant="ghost" className="hidden md:inline-flex" size="md">
        Logga in
      </Button>
      <Button variant="secondary" size="md">
        Skapa konto
      </Button>
    </div>
  );
}
