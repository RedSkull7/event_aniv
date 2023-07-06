AOS.init();
const dataDoAniver = new Date("May 24, 2024 20:00:00");
const timeStampDoAniver = dataDoAniver.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOAniver = timeStampDoAniver - timeStampAtual;
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOAniver / diasEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOAniver % diasEmMs / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOAniver % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOAniver % minutosEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOAniver < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = `Evento expirado`;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
