//Utilities Package

start =
    query


Token = text: [a-z0-9]+
  { return text.join(''); }

s = text: [" "\t]+
  { return " "; }


query = (pkg: Token) (s) (cmd: Token) (s) (args: (Token s)*) (argsLast: Token)
  {  return (pkg + ',' + cmd + ',' + args.join('') + argsLast).replace(/ /g, ""); }