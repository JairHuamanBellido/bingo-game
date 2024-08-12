"use client";

import { BingoService } from "@/domain/services/Bingo.service";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const createGame = async () => {
    const res = await BingoService.create();

    router.push(`/room/${res}`);
  };

  return (
    <main>
      <button onClick={createGame}>Crear nuevo juego</button>
    </main>
  );
}
