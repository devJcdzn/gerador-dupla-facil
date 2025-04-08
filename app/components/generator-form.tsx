"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { type Jogo, gerarJogosDuplaSena } from "../actions/waitlist";

interface GeneratorFormProps {
  onSuccess: (games: Jogo[]) => void;
}

export function GeneratorForm({ onSuccess }: GeneratorFormProps) {
  const [state, formAction, isPending] = useActionState(
    gerarJogosDuplaSena,
    null
  );

  useEffect(() => {
    if (state?.success) {
      onSuccess(state.games);
    }
  }, [state, onSuccess]);

  const handleSubmit = async (formData: FormData) => {
    await formAction(formData);
  };

  return (
    <form action={handleSubmit} className="w-full space-y-4 mb-4">
      <div className="flex overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-blue-500">
        <Input
          id="games"
          name="games"
          placeholder="Coloque o número de jogos"
          required
          autoComplete="off"
          className="w-full border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:bg-transparent focus:border-transparent autofill:bg-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
        />
        <Button
          type="submit"
          disabled={isPending}
          className="bg-black hover:bg-gray-800 text-white font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-[120px]"
        >
          {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Gerar"}
        </Button>
      </div>
    </form>
  );
}
