AOS.init();

const dataDoAniver = new Date("May 24, 2024 20:00:00")
const timeStampDoAniver = dataDoAniver.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date ();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor (distanciaAteOAniver / diasEmMs);
    const horasAteOEvento = Math.floor ((distanciaAteOAniver % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor ((distanciaAteOAniver % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor ((distanciaAteOAniver  % minutosEmMs) / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOAniver < 0 ) {
        clearInterval (contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }

}, 1000);