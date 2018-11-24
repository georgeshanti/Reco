%{
    #include<string>
    #include<iostream>
    #include "y.tab.h"
    int yyl=1;
    int chno=1;
%}

alnum [a-zA-Z0-9]
digit [0-9]

%%
"?"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return QMARK;}
"="                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return EQUAL;}
":"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return COLON;}
"<"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return OPEN_TAG;}
">"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return CLOSE_TAG;}
"/"                                                         {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return SLASH;}
"\""({alnum}|"-"|":"|";"|"."|"/"|"#"|"'"|" "|",")+"\""      {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return STRING;}
{digit}+                                                    {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return NUMBER;}
({alnum}|"-")+                                              {yylval.str=strdup(yytext); chno+=strlen(yylval.str); return ALNUM;}

[\n]                                                        {yyl++;chno=1;}
[ \t]                                                       {yylval.str=strdup(yytext); chno+=strlen(yylval.str);}

%%

int yywrap(void){return 1;}