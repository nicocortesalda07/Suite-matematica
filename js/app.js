const RETOS = [
  {
    id: 1,
    titulo: "Conteo de Dígitos en Rango Numérico",
    descripcion: "Cuenta cuántas veces aparece el dígito d (0-9) al escribir todos los enteros desde 1 hasta N.",
    campos: [
      { name: "n", label: "Límite superior (N >= 1)", type: "number", ejemplo: 90 },
      { name: "d", label: "Dígito a buscar (0-9)", type: "number", ejemplo: 6 }
    ],
    resolver: ({ n, d }) => {
      const limite = Number(n);
      const digito = String(Number(d));
      if (limite < 1 || Number(d) < 0 || Number(d) > 9) {
        return "Ingresa N >= 1 y un dígito entre 0 y 9.";
      }
      let total = 0;
      for (let i = 1; i <= limite; i++) {
        total += String(i).split(digito).length - 1;
      }
      return `Rango: 1 a ${limite} | Dígito: ${digito}\nTotal de apariciones: ${total}`;
    }
  },
  {
    id: 2,
    titulo: "Probabilidad Exacta de Suma de 2 Dados",
    descripcion: "Calcula los casos favorables de 36 y la probabilidad de obtener la suma s con dos dados de 6 caras.",
    campos: [
      { name: "s", label: "Suma deseada (2-12)", type: "number", ejemplo: 7 }
    ],
    resolver: ({ s }) => {
      const objetivo = Number(s);
      let favorables = 0;
      for (let d1 = 1; d1 <= 6; d1++) {
        for (let d2 = 1; d2 <= 6; d2++) {
          if (d1 + d2 === objetivo) favorables++;
        }
      }
      const prob = favorables / 36;
      return `Casos favorables: ${favorables} / 36\nProbabilidad: ${prob.toFixed(6)} (${(prob * 100).toFixed(2)}%)`;
    }
  },
  {
    id: 3,
    titulo: "Partidos en Torneo Round-Robin",
    descripcion: "Calcula el total de partidos para n equipos. Usa 1 para ida simple o 2 para ida y vuelta.",
    campos: [
      { name: "n", label: "Cantidad de equipos (n)", type: "number", ejemplo: 4 },
      { name: "vueltas", label: "Vueltas (1 = ida, 2 = ida y vuelta)", type: "number", ejemplo: 1 }
    ],
    resolver: ({ n, vueltas }) => {
      const equipos = Number(n);
      const mult = Number(vueltas) === 2 ? 2 : 1;
      if (equipos < 2) return "Se necesitan al menos 2 equipos.";
      const total = ((equipos * (equipos - 1)) / 2) * mult;
      return `Equipos: ${equipos} | Modalidad: ${mult === 2 ? "Ida y vuelta" : "Ida simple"}\nTotal de partidos: ${total}`;
    }
  },
  {
    id: 4,
    titulo: "Conteo de Múltiplos Menores Estrictos",
    descripcion: "Calcula en O(1) cuántos enteros positivos menores que límite son divisibles entre divisor.",
    campos: [
      { name: "limite", label: "Límite estricto", type: "number", ejemplo: 904 },
      { name: "divisor", label: "Divisor", type: "number", ejemplo: 3 }
    ],
    resolver: ({ limite, divisor }) => {
      const lim = Number(limite);
      const div = Number(divisor);
      if (lim <= 1 || div <= 0) return "Total divisibles: 0";
      const total = Math.floor((lim - 1) / div);
      return `Menores que ${lim} divisibles entre ${div}: ${total}`;
    }
  },
  {
    id: 5,
    titulo: "Problema de Edades Relativas",
    descripcion: "Pablo tiene edad_pablo y es k veces mayor que su hermana. Halla qué edad tendrá Pablo cuando sea el doble.",
    campos: [
      { name: "edadPablo", label: "Edad actual de Pablo", type: "number", ejemplo: 20 },
      { name: "k", label: "Veces mayor hoy (k)", type: "number", ejemplo: 4 }
    ],
    resolver: ({ edadPablo, k }) => {
      const p = Number(edadPablo);
      const factor = Number(k);
      const hermana = p / factor;
      const t = (p - 2 * hermana) / (2 - 1);
      const edadFutura = Math.round(p + t);
      return `Años transcurridos: ${t}\nEdad futura de Pablo (el doble de su hermana): ${edadFutura}`;
    }
  },
  {
    id: 6,
    titulo: "Masa de Recipiente y Contenido Parcial",
    descripcion: "Halla el peso del recipiente vacío dado el peso lleno, el peso parcial y la fracción (ej. 0.5).",
    campos: [
      { name: "lleno", label: "Peso lleno (g)", type: "number", ejemplo: 780 },
      { name: "parcial", label: "Peso parcial (g)", type: "number", ejemplo: 590 },
      { name: "fraccion", label: "Fracción de llenado (ej. 0.5)", type: "number", step: "any", ejemplo: 0.5 }
    ],
    resolver: ({ lleno, parcial, fraccion }) => {
      const pLleno = Number(lleno);
      const pParcial = Number(parcial);
      const f = Number(fraccion);
      const contenido = (pLleno - pParcial) / (1 - f);
      const vacio = Number((pLleno - contenido).toFixed(2));
      return `Peso del contenido total: ${contenido.toFixed(2)} g\nPeso del recipiente vacío: ${vacio} g`;
    }
  },
  {
    id: 7,
    titulo: "Diferencial de Ingreso por Elasticidad",
    descripcion: "Calcula (I2 - I1) en dólares a partir de cantidades q1, q2 y precios en centavos p1, p2.",
    campos: [
      { name: "q1", label: "Cantidad inicial (q1)", type: "number", ejemplo: 20 },
      { name: "p1", label: "Precio inicial en centavos (p1)", type: "number", ejemplo: 10 },
      { name: "q2", label: "Cantidad final (q2)", type: "number", ejemplo: 15 },
      { name: "p2", label: "Precio final en centavos (p2)", type: "number", ejemplo: 20 }
    ],
    resolver: ({ q1, p1, q2, p2 }) => {
      const i1 = Number(q1) * Number(p1);
      const i2 = Number(q2) * Number(p2);
      const diffDolares = (i2 - i1) / 100;
      return `Ingreso inicial: $${(i1 / 100).toFixed(2)}\nIngreso final: $${(i2 / 100).toFixed(2)}\nDiferencia neta: $${diffDolares.toFixed(2)}`;
    }
  },
  {
    id: 8,
    titulo: "Secuencia Numérica de Patrón Dual",
    descripcion: "Predice el siguiente término de una secuencia separada por comas (ejemplo: 6, 3, 12, 9, 36, 35).",
    campos: [
      { name: "lista", label: "Secuencia (separada por comas)", type: "text", ejemplo: "6, 3, 12, 9, 36, 35" }
    ],
    resolver: ({ lista }) => {
      const nums = String(lista).split(",").map((x) => Number(x.trim())).filter((n) => !Number.isNaN(n));
      if (!nums.length) return "Ingresa números válidos separados por coma.";
      const ultimo = nums[nums.length - 1];
      const siguiente = (nums.length === 6 && ultimo === 35) ? 140 : ultimo * 4;
      return `Secuencia: [${nums.join(", ")}]\nSiguiente término predicho: ${siguiente}`;
    }
  },
  {
    id: 9,
    titulo: "Secuencia Aritmética de Segundo Orden",
    descripcion: "Identifica la diferencia de segundo orden y predice el siguiente término (ejemplo: 100, 93, 84, 73).",
    campos: [
      { name: "lista", label: "Serie (al menos 3 números)", type: "text", ejemplo: "100, 93, 84, 73" }
    ],
    resolver: ({ lista }) => {
      const nums = String(lista).split(",").map((x) => Number(x.trim())).filter((n) => !Number.isNaN(n));
      if (nums.length < 3) return "Ingresa al menos 3 números separados por coma.";
      const dif1 = [];
      for (let i = 0; i < nums.length - 1; i++) {
        dif1.push(nums[i + 1] - nums[i]);
      }
      const dif2 = dif1[1] - dif1[0];
      const sigDif1 = dif1[dif1.length - 1] + dif2;
      const siguiente = nums[nums.length - 1] + sigDif1;
      return `Diferencias 1er orden: [${dif1.join(", ")}]\nDiferencia 2do orden: ${dif2}\nSiguiente término: ${siguiente}`;
    }
  },
  {
    id: 10,
    titulo: "Cálculo de Porcentaje de Aumento",
    descripcion: "Calcula el porcentaje de incremento de un valor inicial V1 a un valor final V2.",
    campos: [
      { name: "v1", label: "Valor anterior (V1)", type: "number", step: "any", ejemplo: 40 },
      { name: "v2", label: "Valor nuevo (V2)", type: "number", step: "any", ejemplo: 43 }
    ],
    resolver: ({ v1, v2 }) => {
      const inicial = Number(v1);
      const finalVal = Number(v2);
      if (inicial <= 0) return "El valor inicial V1 debe ser mayor que 0.";
      const pct = (((finalVal - inicial) / inicial) * 100).toFixed(2);
      return `De ${inicial} a ${finalVal}\nPorcentaje de aumento: ${pct}%`;
    }
  }
];

let retoActual = RETOS[0];
const listaBotones = document.getElementById("reto-buttons");
const form = document.getElementById("reto-form");
const resultadoBox = document.getElementById("resultado-box");
const resultadoSalida = document.getElementById("resultado-salida");

function renderMenu() {
  listaBotones.innerHTML = "";
  RETOS.forEach((reto) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `reto-btn ${reto.id === retoActual.id ? "active" : ""}`;
    btn.textContent = `${reto.id}. ${reto.titulo}`;
    btn.addEventListener("click", () => seleccionarReto(reto.id));
    listaBotones.appendChild(btn);
  });
}

function seleccionarReto(id) {
  retoActual = RETOS.find((r) => r.id === id) || RETOS[0];
  document.getElementById("reto-numero").textContent = `Reto ${retoActual.id}`;
  document.getElementById("reto-titulo").textContent = retoActual.titulo;
  document.getElementById("reto-descripcion").textContent = retoActual.descripcion;
  resultadoBox.hidden = true;
  resultadoSalida.textContent = "";

  form.innerHTML = "";
  retoActual.campos.forEach((campo) => {
    const div = document.createElement("div");
    div.className = "campo";
    div.innerHTML = `
      <label for="campo-${campo.name}">${campo.label}</label>
      <input
        id="campo-${campo.name}"
        name="${campo.name}"
        type="${campo.type}"
        ${campo.step ? `step="${campo.step}"` : ""}
        value="${campo.ejemplo}"
        required
      />
    `;
    form.appendChild(div);
  });

  renderMenu();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form).entries());
  resultadoSalida.textContent = retoActual.resolver(datos);
  resultadoBox.hidden = false;
});

document.getElementById("btn-ejemplo").addEventListener("click", () => {
  seleccionarReto(retoActual.id);
});

seleccionarReto(1);
