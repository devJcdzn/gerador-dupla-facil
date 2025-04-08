"use server";

export type Jogo = number[];

export async function gerarJogosDuplaSena(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	_prevState: any,
	data: FormData,
): Promise<{ success: boolean; games: Jogo[] }> {
	const games = Number.parseInt(data.get("games")?.toString() || "0", 10);

	const TOTAL_DEZENAS = 50;
	const DEZENAS_POR_JOGO = 6;
	const MAX_UNIQUE_JOGOS = Math.floor(TOTAL_DEZENAS / DEZENAS_POR_JOGO);

	const jogos: Jogo[] = [];

	// Estratégia 1: garantir jogos com dezenas únicas entre si (até o limite)
	if (games <= MAX_UNIQUE_JOGOS) {
		const todasDezenas = shuffleArray(
			Array.from({ length: TOTAL_DEZENAS }, (_, i) => i + 1),
		);

		for (let i = 0; i < games; i++) {
			const jogo = todasDezenas
				.slice(i * DEZENAS_POR_JOGO, (i + 1) * DEZENAS_POR_JOGO)
				.sort((a, b) => a - b);

			if (!temSequencia(jogo)) {
				jogos.push(jogo);
			} else {
				i--; // refaz esse jogo se tiver sequência
			}
		}
	} else {
		// Estratégia 2: jogos com mínima repetição
		while (jogos.length < games) {
			const novoJogo = gerarJogoAleatorio(TOTAL_DEZENAS, DEZENAS_POR_JOGO);

			if (
				!temSequencia(novoJogo) &&
				!temMuitosNumerosRepetidos(novoJogo, jogos, 1) // tolerância menor
			) {
				jogos.push(novoJogo);
			}
		}
	}

	return {
		success: true,
		games: jogos,
	};
}

function gerarJogoAleatorio(total: number, porJogo: number) {
	const dezenas = Array.from({ length: total }, (_, i) => i + 1);
	const jogo: Jogo = [];

	while (jogo.length < porJogo) {
		const index = Math.floor(Math.random() * dezenas.length);
		jogo.push(dezenas.splice(index, 1)[0]);
	}

	return jogo.sort((a, b) => a - b);
}

function temSequencia(jogo: Jogo) {
	let sequencia = 1;
	for (let i = 1; i < jogo.length; i++) {
		if (jogo[i] === jogo[i - 1] + 1) {
			sequencia++;
			if (sequencia >= 3) return true;
		} else {
			sequencia = 1;
		}
	}
	return false;
}

function temMuitosNumerosRepetidos(
	novoJogo: Jogo,
	jogosExistentes: Jogo[],
	tolerancia = 2,
) {
	for (const jogo of jogosExistentes) {
		const repetidos = novoJogo.filter((n) => jogo.includes(n)).length;
		if (repetidos > tolerancia) return true;
	}
	return false;
}

function shuffleArray<T>(array: T[]): T[] {
	const a = [...array];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
