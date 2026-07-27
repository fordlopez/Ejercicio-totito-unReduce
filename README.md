# Totito con `useReducer`

El estado de la aplicación vive en `src/totiContex/toticontex.jsx`. El reducer gestiona:

- modo seleccionado y navegación;
- tablero y turno actual;
- victoria, empate y el mensaje mostrado al jugador;
- reinicio de la partida.

## Modos con IA (preparados, sin conexión)

Los modos **Humano vs IA** e **IA vs IA** ya se pueden seleccionar y muestran una pantalla que indica que falta conectar la IA. No hacen solicitudes ni incluyen una clave secreta.

Cuando quieras implementarlos, crea un backend (por ejemplo, con Node/Express) y guarda `OPENAI_API_KEY` solamente en sus variables de entorno. El frontend debe llamar a una ruta propia, como `POST /api/movimiento-ia`, enviando el tablero y el símbolo de la IA. El backend llama a OpenAI y devuelve solo una posición libre del 0 al 8. Después, el frontend despacha `MARCAR_CASILLA` con esa posición.

Nunca pongas la API key en React, en `src/`, ni en un archivo que se publique en GitHub.

## Comandos

```bash
npm run dev
npm run lint
npm run build
```
