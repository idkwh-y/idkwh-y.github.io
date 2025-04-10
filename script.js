// Загрузка видео после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Установка источников видео
    const video1 = document.getElementById('left.mp4');
    const video2 = document.getElementById('right.MOV');
    
    // Установка источников видео
    if (video1) {
        video1.querySelector('source').src = 'left.mp4';
        video1.load(); // Перезагрузка видео для применения нового источника
    }
    
    if (video2) {
        video2.querySelector('source').src = 'right.MOV';
        video2.load(); // Перезагрузка видео для применения нового источника
    }
    
    // Проверка поддержки автовоспроизведения
    function checkAutoplaySupport() {
        const videoElement = document.createElement('video');
        videoElement.muted = true;
        videoElement.playsInline = true;
        
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Автовоспроизведение поддерживается
                console.log('Автовоспроизведение поддерживается');
            }).catch(() => {
                // Автовоспроизведение не поддерживается
                console.log('Автовоспроизведение не поддерживается');
                
                // Добавляем кнопку воспроизведения
                const playButton = document.createElement('button');
                playButton.textContent = 'Воспроизвести видео';
                playButton.className = 'play-button';
                document.body.appendChild(playButton);
                
                playButton.addEventListener('click', () => {
                    video1.play();
                    video2.play();
                    playButton.style.display = 'none';
                });
            });
        }
    }
    
    checkAutoplaySupport();
    
    // Адаптация размера шрифта логотипа при изменении размера окна
    function adjustLogoSize() {
        const logo = document.querySelector('.logo h1');
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 768) {
            logo.style.fontSize = '2.5rem';
        } else if (windowWidth < 1024) {
            logo.style.fontSize = '3rem';
        } else {
            logo.style.fontSize = '4rem';
        }
    }
    
    // Вызываем функцию при загрузке и изменении размера окна
    adjustLogoSize();
    window.addEventListener('resize', adjustLogoSize);
});