import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoButtonHover = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  if (showCelebration) {
    return <CelebrationPage />;
  }

  return (
    <>
      <Head>
        <title>Une Question Spéciale 💫</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="question-page">
        <div className="floating-elements">
          <div className="floating-item" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>⚽</div>
          <div className="floating-item" style={{ top: '20%', right: '15%', animationDelay: '0.5s' }}>🎌</div>
          <div className="floating-item" style={{ bottom: '15%', left: '20%', animationDelay: '1s' }}>⚡</div>
          <div className="floating-item" style={{ top: '60%', right: '10%', animationDelay: '1.5s' }}>🎭</div>
          <div className="floating-item" style={{ bottom: '30%', right: '25%', animationDelay: '2s' }}>🏆</div>
          <div className="floating-item" style={{ top: '40%', left: '5%', animationDelay: '2.5s' }}>✨</div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="emoji-stack">
              <span style={{ animationDelay: '0s' }}>⚽</span>
              <span style={{ animationDelay: '0.1s' }}>💝</span>
              <span style={{ animationDelay: '0.2s' }}>🎌</span>
            </div>
          </div>

          <h1>Tu veux rester à mes côtés pour toujours ?</h1>

          <div className="buttons">
            <button className="btn btn-yes" onClick={handleYesClick}>
              OUI ! 💕
            </button>
            <button
              className="btn btn-no"
              onMouseEnter={handleNoButtonHover}
              onClick={handleNoButtonHover}
              style={{
                position: 'absolute',
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
              }}
            >
              Non
            </button>
          </div>
        </div>

        <style jsx>{`
          .question-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }

          .floating-item {
            position: absolute;
            font-size: 3rem;
            animation: float 4s infinite ease-in-out;
            opacity: 0.3;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }

          .card {
            background: white;
            border-radius: 30px;
            padding: 60px 50px;
            box-shadow: 0 30px 80px rgba(0,0,0,0.3);
            max-width: 600px;
            width: 100%;
            position: relative;
            z-index: 2;
            animation: slideIn 0.8s ease-out;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .card-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .emoji-stack {
            font-size: 4rem;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            gap: 10px;
          }

          .emoji-stack span {
            display: inline-block;
            animation: bounce 1s infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          h1 {
            font-family: 'Bangers', cursive;
            font-size: 2.5rem;
            color: #ff4757;
            text-shadow: 3px 3px 0 #ffeaa7;
            letter-spacing: 2px;
            margin-bottom: 30px;
            line-height: 1.3;
            text-align: center;
          }

          .buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
            margin-top: 40px;
            position: relative;
            min-height: 80px;
          }

          .btn {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;
            font-weight: 700;
            padding: 18px 50px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }

          .btn-yes {
            background: linear-gradient(135deg, #ff4757, #ff6348);
            color: white;
            position: relative;
            overflow: hidden;
          }

          .btn-yes:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 30px rgba(255,71,87,0.5);
          }

          .btn-no {
            background: linear-gradient(135deg, #95a5a6, #7f8c8d);
            color: white;
            transition: all 0.2s ease;
          }

          @media (max-width: 768px) {
            .card {
              padding: 40px 30px;
            }

            h1 {
              font-size: 2rem;
            }

            .btn {
              font-size: 1.1rem;
              padding: 15px 35px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

function CelebrationPage() {
  useEffect(() => {
    createFireworks();
    createConfetti();
  }, []);

  const createFireworks = () => {
    const colors = ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6348', '#f368e0'];
    const interval = setInterval(() => {
      const container = document.getElementById('fireworks');
      if (!container) return;

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.5;

      for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 50 + Math.random() * 100;
        firework.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
        firework.style.setProperty('--y', Math.sin(angle) * velocity + 'px');

        container.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
      }
    }, 800);

    return () => clearInterval(interval);
  };

  const createConfetti = () => {
    const colors = ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6348', '#f368e0', '#ffd32a'];
    const interval = setInterval(() => {
      const container = document.getElementById('confetti');
      if (!container) return;

      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      confetti.style.animationDuration = (2 + Math.random() * 2) + 's';

      container.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }, 100);

    return () => clearInterval(interval);
  };

  return (
    <>
      <Head>
        <title>Merci d'être là ! 🎉</title>
      </Head>

      <div className="celebration-page">
        <div id="fireworks"></div>
        <div id="confetti"></div>

        <div className="celebration-content">
          <div className="celebration-emoji">🎉</div>

          <h2 className="celebration-title">MERCI D'ÊTRE LÀ ! 🌟</h2>

          <p className="message">
            Depuis août 2025, tu es devenu(e) une personne si précieuse dans ma vie...
          </p>

          <div className="hearts">
            <span style={{ animationDelay: '0s' }}>❤️</span>
            <span style={{ animationDelay: '0.3s' }}>💛</span>
            <span style={{ animationDelay: '0.6s' }}>💚</span>
            <span style={{ animationDelay: '0.9s' }}>💙</span>
            <span style={{ animationDelay: '1.2s' }}>💜</span>
          </div>

          <div className="message-text">
            <p><strong>C'est incroyable comme on s'est rapprochés en si peu de temps.</strong></p>

            <p>Tu te soucies de moi d'une manière qui me touche profondément. Chaque conversation, chaque moment partagé est précieux à mes yeux.</p>

            <p>Qu'on parle de football, de mangas animés,de ninhooo, ou de la vie en général - chaque instant avec toi est spécial. 💫</p>

            <p><strong>Tu n'es pas juste un ami, tu es devenu une partie importante de ma vie.</strong></p>

            <p>Merci d'être toi. Merci d'être là. Merci de te soucier de moi comme tu le fais.</p>

            <p style={{ marginTop: '30px', fontSize: '1.4rem', color: '#ff4757' }}>
              <strong>Pour toujours à tes côtés ! 🤝⚽🎌</strong>
            </p>
          </div>
        </div>

        <style jsx>{`
          .celebration-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            position: relative;
            overflow: hidden;
            padding: 40px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #fireworks, #confetti {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
          }

          :global(.firework) {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            animation: explode 1.5s ease-out;
          }

          @keyframes explode {
            0% {
              transform: translate(0, 0);
              opacity: 1;
            }
            100% {
              transform: translate(var(--x), var(--y));
              opacity: 0;
            }
          }

          :global(.confetti) {
            position: absolute;
            width: 10px;
            height: 10px;
            background: var(--color);
            animation: fall 3s linear;
            opacity: 0.8;
            top: -10px;
          }

          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
            }
          }

          .celebration-content {
            max-width: 800px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 10;
            background: rgba(255,255,255,0.95);
            padding: 60px 40px;
            border-radius: 40px;
            box-shadow: 0 40px 100px rgba(0,0,0,0.3);
            animation: popIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          @keyframes popIn {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .celebration-emoji {
            font-size: 6rem;
            margin-bottom: 30px;
            animation: spin 3s ease-in-out infinite;
          }

          @keyframes spin {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
          }

          .celebration-title {
            font-family: 'Bangers', cursive;
            font-size: 3.5rem;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 30px;
            letter-spacing: 3px;
          }

          .message {
            font-family: 'Caveat', cursive;
            font-size: 1.8rem;
            color: #2f3542;
            line-height: 1.8;
            margin: 30px 0;
            font-weight: 700;
          }

          .message-text {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            color: #555;
            line-height: 1.9;
            margin: 25px 0;
            text-align: left;
            padding: 0 20px;
          }

          .message-text p {
            margin: 15px 0;
          }

          .hearts {
            font-size: 2rem;
            margin: 20px 0;
          }

          .hearts span {
            display: inline-block;
            animation: heartbeat 1.5s infinite;
            margin: 0 5px;
          }

          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            10%, 30% { transform: scale(1.3); }
            20%, 40% { transform: scale(1); }
          }

          @media (max-width: 768px) {
            .celebration-content {
              padding: 40px 20px;
            }

            .celebration-title {
              font-size: 2.5rem;
            }

            .message {
              font-size: 1.5rem;
            }

            .message-text {
              font-size: 1rem;
              padding: 0 10px;
            }
          }
        `}</style>
      </div>
    </>
  );
}
