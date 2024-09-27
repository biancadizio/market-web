// src/pages/api/login.ts

import type { NextApiRequest, NextApiResponse } from 'next';

// Handler para a rota de API
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        return res.status(200).json({ message: 'Login realizado com sucesso.' });
      } else {
        return res.status(401).json({ message: data.message || 'Credenciais inválidas.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  } else {
    // Só permitimos o método POST
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Método ${req.method} não permitido.` });
  }
}
