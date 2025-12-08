type programs = { name: string; program: string };

export const examplePrograms: programs[] = [
  {
    name: "array.fun",
    program: `val Intarr[3]:Int;
val Arr[3]:Double;
Intarr[0] = 1;
Intarr[1] = 2;
Intarr[2] = 3;
Arr[0] = 1.5;
Arr[1] = 2.5;
Arr[2] = 3.5;
{
set_val_i32(Intarr,0,100);
print_string("Integer Array");
print_string("\n");
print_int(Intarr[0]);
print_string("\n");
print_int(Intarr[1]);
print_string("\n");
print_int(Intarr[2]);
print_string("\n");
print_string("Double Array");
print_string("\n");
print_float(Arr[0]);
print_string("\n");
print_float(Arr[1]);
print_string("\n");
print_float(Arr[2]);
print_string("\n")
}`,
  },
  {
    name: "bf.fun",
    program: `val Arr[30000]: Int;
val Bf: String ="++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";

def jumpLeft(prog:String, pc:Int, level:Int) : Int = {
    if pc < 0 then pc else {
        if prog[pc] == "[" && level == 0 then pc + 1 else {
            if prog[pc] == "[" then jumpLeft(prog, pc - 1, level - 1) else {
                 if prog[pc] == "]" then jumpLeft(prog, pc - 1, level + 1) else jumpLeft(prog, pc - 1, level)
            }
        }
    }
};


def jumpRight(prog:String, pc:Int, level: Int) : Int = {
    if length(prog) <= pc then pc else {
        if prog[pc] == "]" && level == 0 then pc + 1 else {
            if prog[pc] == "]" then jumpRight(prog, pc + 1, level - 1) else {
                 if prog[pc] == "[" then jumpRight(prog, pc + 1, level + 1) else jumpRight(prog, pc + 1, level)
            }
        }
    }
};

def compute(prog: String, pc: Int, mp: Int): Int[] = {
    if 0 <= pc && pc < length(prog) then {
        if prog[pc] == ">" then compute(prog, pc + 1, mp + 1) else {
            if prog[pc] == "<" then compute(prog, pc + 1, mp - 1) else {
                if prog[pc] == "+" then { 
                    set_val_i32(Arr,mp, Arr[mp] + 1);
                    compute(prog, pc + 1, mp)} else {
                    if prog[pc] == "-" then {
                        set_val_i32(Arr,mp, Arr[mp] - 1);
                        compute(prog,pc+1,mp)
                    }  else {
                    if prog[pc] == "." then {
                        print_char(Arr[mp]);
                        compute(prog, pc +1, mp)
                    } else {
                    if prog[pc] == "," then {
                        set_val_i32(Arr,mp, read());
                        compute(prog, pc + 1, mp)
                    }    else {
                    if prog[pc] == "[" then {
                        if Arr[mp] == 0 then compute(prog, jumpRight(prog ,pc + 1, 0), mp) else compute(prog, pc + 1, mp)
                    } else {
                    if prog[pc] == "]" then {
                        if Arr[mp] != 0 then compute(prog, jumpLeft(prog, pc - 1, 0), mp) else compute(prog, pc + 1, mp)
                    }
                    else compute(prog,pc + 1, mp)
                    }
                    }
                    }

                    }

                }
            }
        }

    } else Arr
};

def run(prog: String): Int[] = compute(prog,0,0);

run(Bf)`,
  },
  {
    name: "fact.fun",
    program: `def fact(n: Int) : Int =
  if n == 0 then 1 else n * fact(n - 1);

def facT(n: Int, acc: Int) : Int =
  if n == 0 then acc else facT(n - 1, n * acc);

def facTi(n: Int) : Int = facT(n, 1);

{print_int(facT(30,1));
print_string("\n");
print_int(fact(30));
print_string("\n")}

`,
  },
  {
    name: "fib.fun",
    program: `def fib(n:Int):Int = {
    if n <= 1 then n else fib(n-1) + fib(n-2)
};

{print_int(fib(30));
print_string("\n")}`,
  },
  {
    name: "hello.fun",
    program: `def hello(): String = "Hello World!\n";

def print_hello(x: String) : Void = print_string(x);

print_string(hello())`,
  },
  {
    name: "mand.fun",
    program: `val Ymin: Double = -1.3;
val Ymax: Double =  1.3;
val Ystep: Double = 0.05;  

val Xmin: Double = -2.1;
val Xmax: Double =  1.1;
val Xstep: Double = 0.02;  

val Maxiters: Int = 1000;

def m_iter(m: Int, x: Double, y: Double,
                   zr: Double, zi: Double) : Void = {
  if Maxiters <= m
  then print_string("*")
  else {
    if 4.0 <= zi*zi+zr*zr then print_string(" ")
    else m_iter(m + 1, x, y, x+zr*zr-zi*zi, 2.0*zr*zi+y) 
  }
};

def x_iter(x: Double, y: Double) : Void = {
  if x <= Xmax
  then { m_iter(0, x, y, 0.0, 0.0) ; x_iter(x + Xstep, y) }
  else skip()
};

def y_iter(y: Double) : Void = {
  if y <= Ymax
  then { x_iter(Xmin, y) ; print_string("\n") ; y_iter(y + Ystep) }
  else skip() 
};    


y_iter(Ymin)`,
  },
  {
    name: "sqr.fun",
    program: `val Max : Int = 100;

def sqr(x: Int) : Int = x * x;

def all(n: Int) : Void = {
  if n <= Max
  then { print_int(sqr(n)); print_string("\n") ; all(n + 1) }
  else skip()
};

{
  all(0)
} `,
  },
  {
    name: "string_comp.fun",
    program: `val Bf: String = "[]";

def is_equal(x: String, y: String) : Void = {
    if x == y[0] then print_string("Equal\n") else print_string("Not Equal\n")
};

def is_not_equal(x: String, y: String) : Void = {
    if x != y[1] then print_string("Not Equal\n") else print_string("Equal\n")
};


{is_equal("[", Bf);
is_not_equal("[", Bf)}`,
  },
  {
    name: "test_incorrect.fun",
    program: `
    def hello(): String = "Hello World!\n";

def print_hello(x: String) : Void = print_string(x);

print_string(hello(1,2,3,4,5))`,
  },
];
