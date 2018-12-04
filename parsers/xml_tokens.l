%{
    #include<string>
    #include<iostream>
    #include "y.tab.h"
    int yyl=1;
    int chno=0;
%}

alnum [a-zA-Z0-9]
digit [0-9]
special [!@#$%&*()_+{};:'",.<>|?/]

%%
"?"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected question mark\n"; return QMARK;}
"-"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected hyphen\n"; return HYPHEN;}
"="                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected equal\n"; return EQUAL;}
":"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected colon\n"; return COLON;}
"<"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected open tag\n"; return OPEN_TAG;}
">"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected close tag\n"; return CLOSE_TAG;}
"/"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected slash\n"; return SLASH;}
({alnum})+                                                  {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected alnum\n"; return ALNUM;}
"\""({alnum}|"-"|":"|";"|"."|"/"|"#"|"'"|" "|",")+"\""      {yylval.str=strdup(yytext); chno+=strlen(yylval.str); std::cout<<"Detected string\n"; return STRING;}

[\n]                                                        {yyl++;chno=0;}
[ \t]                                                       {yylval.str=strdup(yytext); chno+=strlen(yylval.str);}

%%

int yywrap(void){return 1;}