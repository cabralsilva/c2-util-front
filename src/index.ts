import moment from "moment"

export const isNotEmpty = (obj: any) => {
  return !isEmpty(obj)
}

export const isEmpty = (obj: any) => {
  if (typeof obj === "undefined") {
    return true
  }

  if (typeof obj === "number") {
    if (isNaN(obj)) {
      return true
    }
    return false
  }

  if (obj === "undefined") {
    return true
  }

  if (!obj) {
    return true
  }

  if (Array.isArray(obj)) {
    if (obj.length == 0) {
      return true
    }
  }

  if (obj === "") {
    return true
  }

  return false
}

export const replacer = () => {
  const seen = new WeakSet();
  return function (key: any, value: any) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return; // Se já foi visto, evita referência circular
      seen.add(value);
    }
    return value;
  };
}

export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const trunc = (value: number, decimalPlates = 0): number => {
  if (value === undefined || isNaN(value)) {
    return value;
  }

  const factor = 10 ** decimalPlates;
  const rounded = Math.trunc(value * factor) / factor;
  return rounded;
}

export const round = (value: number, decimalPlates = 0): number => {
  if (value === undefined || isNaN(value)) {
    return value;
  }
  value = trunc(value, decimalPlates + 1);
  const factor = 10 ** decimalPlates;
  const rounded = Math.round(value * factor) / factor;
  return rounded;
}

export const timeToPercentage = (time: string): number => {

  // Expressão regular para validar o formato HH:mm
  const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;

  // Verifica se o formato está correto
  if (!timeFormat.test(time)) {
    throw new Error("Invalid time format, expected HH:mm");
  }

  const [hours, minutes] = time.split(":").map(Number);

  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error("Invalid time format");
  }

  // Convert hours and minutes to the percentage equivalent
  return hours + (minutes / 60);
}
