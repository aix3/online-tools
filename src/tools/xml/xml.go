// +build js,wasm
//// +build linux darwin

package main

import (
	"bytes"
	"github.com/antlr/antlr4/runtime/Go/antlr"
	"syscall/js"
	"xiapi-lang/parser"
)

func main() {
	js.Global().Set("evaluate", js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return js.ValueOf(evaluate(args[0].String()))
	}))
	select {}
}

func evaluate(text string) string {
	lexer := parser.NewXiapiLexer(antlr.NewInputStream(text))
	xiapi := parser.NewXiapiParser(antlr.NewCommonTokenStream(lexer, antlr.TokenDefaultChannel))
	xiapi.BuildParseTrees = true

	parse := xiapi.Parse()

	writer := new(bytes.Buffer)
	visitor := XiapiLangVisitor{
		Console: writer,
		Mem:     make(map[string]*Value),
	}
	visitor.VisitParse(parse.(*parser.ParseContext))
	return string(writer.Bytes())
}
