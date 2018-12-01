%{
    #include<string>
    #include<iostream>

    using namespace std;

    int yylex(void);
    void yyerror(char *s);
%}

%union {
    char *str;
}

%token QMARK
%token ALNUM
%token STRING
%token NUMBER
%token CLOSE_TAG
%token OPEN_TAG
%token SLASH
%token COLON
%token EQUAL
%%

XMLDocument: document{
        printf("Valid XML document.\n");
        return 0;
    };

document:                       xml_node node
xml_node:                       OPEN_TAG QMARK ALNUM QMARK CLOSE_TAG
                                |OPEN_TAG QMARK ALNUM attribute_list QMARK CLOSE_TAG
node:                           node_start node_end
                                |node_start text node_end
                                |single_node
                                |node_start node_list node_end
single_node:                    OPEN_TAG node_name SLASH CLOSE_TAG
                                |OPEN_TAG node_name attribute_list SLASH CLOSE_TAG
node_list:                      node_list node | node
node_start:                     OPEN_TAG node_name CLOSE_TAG
                                |OPEN_TAG node_name attribute_list CLOSE_TAG
attribute_list:                 attribute_list attribute | attribute
attribute:                      attribute_key EQUAL attribute_value
attribute_key:                  ALNUM                       {cout<<"Found attribute-key: "<<$<str>1<<"\n";}
                                |ALNUM COLON ALNUM          {cout<<"Found attribute-key: "<<$<str>1<<":"<<$<str>3<<"\n";}
attribute_value:                STRING                      {cout<<"Found attribute-value: "<<$<str>1<<"\n";}
                                |NUMBER                     {cout<<"Found attribute-value: "<<$<str>1<<"\n";}
node_end:                       OPEN_TAG SLASH node_name CLOSE_TAG
node_name:                      ALNUM
                                |ALNUM COLON ALNUM
text:                           text ALNUM | ALNUM

%%


void yyerror(char *s){
    extern int yyl, chno;
    printf("Invalid XML document. Error in line %d:%d\n", yyl, chno);
}