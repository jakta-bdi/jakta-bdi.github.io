# Hello World

This is a `Hello World` agent written with JaKtA syntax, printing the string "Hello, World!" to the console. 

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

If the agent's elements are unfamiliar for you, continue the read with [Basic Concepts](../basic-concepts/index.md).