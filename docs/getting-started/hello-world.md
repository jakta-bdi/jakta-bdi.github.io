---
sidebar_position: 1
---

# Hello World

This is a `Hello World` agent, printing the string "Hello, World!" to the console. 

```kt showLineNumbers
fun main() {
    mas {
        agent("myAgent") {
            goals {
                achieve("sayHello")
            }
            plans {
                +achieve("sayHello") then {
                    execute("print"("Hello, World!"))
                }
            }
        }
    }.start()
}
```
