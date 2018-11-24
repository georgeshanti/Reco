#include<stdio.h>
#include<iostream>

// extern int yylex();
extern void yyparse();
extern void yyset_in(FILE* fp);

int main(){
    FILE *f_in;
    f_in = fopen("content.xml","r");
    yyset_in(f_in);
    yyparse();
    return 0;
}