const Button = document.getElementById("mode");
const body = document.body;

Button.onclick = () => {
    Button.classList.toggle('off');
    if (body.classList.contains('darkTheme')) {
        body.classList.replace('darkTheme', 'light');
    } else {
        body.classList.replace('light', 'darkTheme');
    }
};