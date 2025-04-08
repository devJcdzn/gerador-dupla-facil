import type { Jogo } from "../actions/waitlist";

interface GameListProps {
  jogos: Jogo[];
}

export function GameList({ jogos }: GameListProps) {
  if (jogos.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {jogos.map((jogo, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="rounded-xl border border-white/10 bg-white/5 p-4 text-white shadow-md"
        >
          <h3 className="mb-2 text-sm font-semibold text-blue-400">
            Jogo #{index + 1}
          </h3>
          <div className="flex flex-wrap md:items-center gap-2">
            {jogo.map((dezena) => (
              <span
                key={dezena}
                className="rounded-full bg-blue-600/80 px-3 py-1 text-sm font-medium shadow-sm"
              >
                {dezena.toString().padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
