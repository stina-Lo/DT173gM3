var open = 0;
function toggleOpen(burgerId, elementId, displayValue) {
    var htmlElement = document.getElementById(elementId);
    var burgerBun = document.getElementById(burgerId).children;
    if (open !== 0) {
        for (let i = 0; i < burgerBun.length; i++) {
            if (i == 0) {
                burgerBun[i].style.transform = "rotate(0)";
            } else if (i == 1) {
                burgerBun[i].style.opacity = "1";
                burgerBun[i].style.transform = "translateX(0)"
            } else {
                burgerBun[i].style.transform = "rotate(0)";
            }
        }
        htmlElement.style.transform = "translateX(-200%)";
        open = 0;
    } else {

        for (let i = 0; i < burgerBun.length; i++) {
            if (i == 0) {
                burgerBun[i].style.transform = "rotate(45deg)";
            } else if (i == 1) {
                burgerBun[i].style.opacity = "0";
                burgerBun[i].style.transform = "translateX(20px)"
            } else {
                burgerBun[i].style.transform = "rotate(-45deg)";
            }
        }
        htmlElement.style.transform = "translateX(0)";
        open = 1;
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb3BlbiA9IDA7XG5mdW5jdGlvbiB0b2dnbGVPcGVuKGJ1cmdlcklkLCBlbGVtZW50SWQsIGRpc3BsYXlWYWx1ZSkge1xuICAgIHZhciBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgdmFyIGJ1cmdlckJ1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1cmdlcklkKS5jaGlsZHJlbjtcbiAgICBpZiAob3BlbiAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlckJ1bi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IDEpIHtcbiAgICAgICAgICAgICAgICBidXJnZXJCdW5baV0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXJnZXJCdW5baV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMClcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBodG1sRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTIwMCUpXCI7XG4gICAgICAgIG9wZW4gPSAwO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXJnZXJCdW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBidXJnZXJCdW5baV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoNDVkZWcpXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMSkge1xuICAgICAgICAgICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgYnVyZ2VyQnVuW2ldLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgyMHB4KVwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtNDVkZWcpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XG4gICAgICAgIG9wZW4gPSAxO1xuICAgIH1cbn0iXSwiZmlsZSI6ImpzL2luZGV4LmpzIn0=
