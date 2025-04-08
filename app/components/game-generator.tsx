"use client";

import { GithubIcon } from "lucide-react";
import { useState } from "react";
import type { Jogo } from "../actions/waitlist";
import { GameList } from "./game-list";
import { GeneratorForm } from "./generator-form";
import { LinkedInIcon } from "./icons/linkedin-icon";
import { XIcon } from "./icons/x-icon";
import { SocialIcon } from "./social-icon";

export function GameGenerator() {
  const [games, setGames] = useState<Jogo[]>([]);

  const handleSuccess = (resultGames: Jogo[]) => {
    console.log("Yeah :)");
    setGames(resultGames);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-400">
            Gere diversidade de jogos para sua Dupla-Sena
          </h2>
        </div>
        <div className="w-full">
          <GeneratorForm onSuccess={handleSuccess} />
        </div>
      </div>
      <GameList jogos={games} />
      <div className="pt-8 flex justify-center space-x-6">
        <SocialIcon
          href="https://x.com/clo_jeann"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://github.com/devJcdzn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<GithubIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://linkedin.com/in/jeancdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  );
}
