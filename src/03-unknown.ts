let anyVar: any;
let isNew: boolean = anyVar;

anyVar.doKs();

let unknownVar: unknown;

//unknownVar.doKs();
if (typeof unknownVar === 'string') {
  unknownVar.toLowerCase();
}

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}