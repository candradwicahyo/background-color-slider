window.onload = () => {
  
  const container = document.querySelector('.container');
  const input = document.querySelector('.input-range');
  input.addEventListener('input', function() {
    // value input range
    const value = this.value;
    // set value input range kedalam element container
    container.style.width = value + '%';
  });
  
}