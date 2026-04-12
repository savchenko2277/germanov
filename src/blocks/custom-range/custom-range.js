(() => {
    document.querySelectorAll('.custom-range').forEach(block => {
        const input = block.querySelector('.custom-range__input');
        const minus = block.querySelector('.custom-range__btn--minus');
        const plus = block.querySelector('.custom-range__btn--plus');

        const min = Number(block.dataset.min) || 0;
        const max = Number(block.dataset.max) || Infinity;

        input.min = min;
        input.max = max;

        minus.addEventListener('click', () => {
            let value = Number(input.value) || 0;
            value = Math.max(min, value - 1);
            input.value = value;
            input.dispatchEvent(new Event('input'));
        });

        plus.addEventListener('click', () => {
            let value = Number(input.value) || 0;
            value = Math.min(max, value + 1);
            input.value = value;
            input.dispatchEvent(new Event('input'));
        });

        input.addEventListener('input', () => {
            let value = Number(input.value);

            if (value < min) input.value = min;
            if (value > max) input.value = max;
        });
    });

})();
