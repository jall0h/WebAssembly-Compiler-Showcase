export const functionImports = `(module 
(import "js" "mem" (memory 1))
(func (export "set_val_i32") (param $arr i32) (param $pos i32) (param $new_val i32)
    local.get $arr
    local.get $pos
    i32.const 4
    i32.mul
    i32.add
    local.get $new_val
    i32.store
)

(func (export "set_val_f32") (param $arr i32) (param $pos i32) (param $new_val f32)
    local.get $arr
    local.get $pos
    i32.const 4
    i32.mul
    i32.add
    local.get $new_val
    f32.store
)

(func (export "length") (param $x_o i32) (param $x_l i32) (result i32) 
    local.get $x_l
    return
)

(func (export "read") (result i32)
    i32.const 0 
    return
)

(func $string_eq (export "string_eq") (param $x_o i32) (param $x_l i32) (param $y_o i32) (param $y_l i32) (result i32)
    (local $i i32)
    local.get $x_l
    local.get $y_l
    i32.ne
    (if (result i32)
        (then
            i32.const 0
        )
        (else
            (loop $check_char
               
                ;; load character from the first string
                local.get $x_o
                local.get $i
                i32.add
                i32.load8_u

                ;; load character from the second string
                local.get $y_o
                local.get $i
                i32.add
                i32.load8_u

                ;; compare characters between strings
                i32.ne
                (if
                    (then
                
                        i32.const 0
                        return
                    )
                )
                
                ;; increment counter
                local.get $i
                i32.const 1
                i32.add
                local.set $i

                ;; branch if $i less than $x_l
                local.get $i
                local.get $x_l
                i32.lt_s
                br_if $check_char

                
            )
            i32.const 1
        )
    )
)

(func (export "string_ne") (param $x_o i32) (param $x_l i32) (param $y_o i32) (param $y_l i32) (result i32)
        local.get $x_o
        local.get $x_l
        local.get $y_o
        local.get $y_l
        call $string_eq
        i32.eqz
    )
)`;
