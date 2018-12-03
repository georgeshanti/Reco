%{
    #include<string.h>
    #include<iostream>

    using namespace std;

    int yylex(void);
    void yyerror(char *s);
%}

%union {
    char *str;
}

%token QMARK
%token STRING
%token ALNUM 
%token CLOSE_TAG
%token OPEN_TAG
%token SLASH
%token COLON
%token EQUAL
%token QUOTE
%token HYPHEN
%%

XMLDocument: document{
        printf("Valid XML document.\n");
        return 0;
    };

document:                       xml_node node                                           {
                                                                                            FILE *fout = fopen("content.json","w");
                                                                                            fprintf(fout,"%s", $<str>2);
                                                                                        }
xml_node:                       OPEN_TAG QMARK ALNUM QMARK CLOSE_TAG
                                |OPEN_TAG QMARK ALNUM attribute_list QMARK CLOSE_TAG
node:                           node_start node_end                                     {
                                                                                            char *node;
                                                                                            node = (char*) calloc(strlen($<str>1)+3, sizeof(char));
                                                                                            strcpy(node, "{");
                                                                                            strcat(node, $<str>1);
                                                                                            strcat(node, "}");
                                                                                            $<str>$=node;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                        }
                                |node_start text node_end                               {
                                                                                            char *node;
                                                                                            node = (char*) calloc(strlen($<str>1)+strlen($<str>2)+15, sizeof(char));
                                                                                            strcpy(node, "{");
                                                                                            strcat(node, $<str>1);
                                                                                            strcat(node, ", \"text\": \"");
                                                                                            strcat(node, $<str>2);
                                                                                            strcat(node, "\"}");
                                                                                            $<str>$=node;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
                                |single_node                                            {
                                                                                            char *node;
                                                                                            node = (char*) calloc(strlen($<str>1)+3, sizeof(char));
                                                                                            strcpy(node, "{");
                                                                                            strcat(node, $<str>1);
                                                                                            strcat(node, "}");
                                                                                            $<str>$=node;
                                                                                            free($<str>1);
                                                                                        }
                                |node_start node_list node_end                          {
                                                                                            char *node;
                                                                                            node = (char*) calloc(strlen($<str>1)+strlen($<str>2)+19, sizeof(char));
                                                                                            strcpy(node, "{");
                                                                                            strcat(node, $<str>1);
                                                                                            strcat(node, ", \"children\": [");
                                                                                            strcat(node, $<str>2);
                                                                                            strcat(node, "]}");
                                                                                            $<str>$=node;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
single_node:                    OPEN_TAG node_name SLASH CLOSE_TAG                      {
                                                                                            char *s_node;
                                                                                            s_node = (char*) calloc(strlen($<str>2)+1, sizeof(char));
                                                                                            strcat(s_node, $<str>2);
                                                                                            $<str>$=s_node;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
                                |OPEN_TAG node_name attribute_list SLASH CLOSE_TAG      {
                                                                                            char *s_node;
                                                                                            s_node = (char*) calloc(strlen($<str>2)+strlen($<str>3)+19, sizeof(char));
                                                                                            strcat(s_node, $<str>2);
                                                                                            strcat(s_node, ", \"attributes\": [");
                                                                                            strcat(s_node, $<str>3);
                                                                                            strcat(s_node, "]");
                                                                                            $<str>$=s_node;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                            free($<str>4);
                                                                                            free($<str>5);
                                                                                        }
node_list:                      node_list node                                          {
                                                                                            char *n_list;
                                                                                            n_list = (char*) calloc(strlen($<str>1)+strlen($<str>2)+3, sizeof(char));
                                                                                            strcpy(n_list, $<str>1);
                                                                                            strcat(n_list, ", ");
                                                                                            strcat(n_list, $<str>2);
                                                                                            $<str>$=n_list;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                        }
                                |node                                                   {
                                                                                            char *n_list;
                                                                                            n_list = (char*) calloc(strlen($<str>1)+1, sizeof(char));
                                                                                            strcpy(n_list, $<str>1);
                                                                                            $<str>$=n_list;
                                                                                            free($<str>1);
                                                                                        }
node_start:                     OPEN_TAG node_name CLOSE_TAG                            {
                                                                                            char *n_start;
                                                                                            n_start = (char*) calloc(strlen($<str>2)+1, sizeof(char));
                                                                                            strcpy(n_start, $<str>2);
                                                                                            $<str>$=n_start;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
                                |OPEN_TAG node_name attribute_list CLOSE_TAG            {
                                                                                            char *n_start;
                                                                                            n_start = (char*) calloc(strlen($<str>2)+strlen($<str>3)+19, sizeof(char));
                                                                                            strcpy(n_start, $<str>2);
                                                                                            strcat(n_start, ", \"attributes\": [");
                                                                                            strcat(n_start, $<str>3);
                                                                                            strcat(n_start, "]");
                                                                                            $<str>$=n_start;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                            free($<str>4);
                                                                                        }
attribute_list:                 attribute_list attribute                                {
                                                                                            char *a_list;
                                                                                            a_list = (char*) calloc(strlen($<str>1)+strlen($<str>2)+3, sizeof(char));
                                                                                            strcpy(a_list, $<str>1);
                                                                                            strcat(a_list, ", ");
                                                                                            strcat(a_list, $<str>2);
                                                                                            $<str>$=a_list;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                        }
                                | attribute                                             {
                                                                                            char *a_list;
                                                                                            a_list = (char*) calloc(strlen($<str>1)+1, sizeof(char));
                                                                                            strcpy(a_list, $<str>1);
                                                                                            $<str>$=a_list;
                                                                                            free($<str>1);
                                                                                        }
attribute:                      attribute_key EQUAL attribute_value                     {
                                                                                            char *attr;
                                                                                            attr = (char*) calloc(strlen($<str>1)+strlen($<str>3)+14, sizeof(char));
                                                                                            strcpy(attr, "{");
                                                                                            strcat(attr, $<str>1);
                                                                                            strcat(attr, ", \"value\": ");
                                                                                            strcat(attr, $<str>3);
                                                                                            strcat(attr, "}");
                                                                                            $<str>$=attr;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
attribute_key:                  key                                                     {
                                                                                            char *a_key;
                                                                                            a_key = (char*) calloc(strlen($<str>1)+11, sizeof(char));
                                                                                            strcat(a_key, "\"name\": \"");
                                                                                            strcat(a_key, $<str>1);
                                                                                            strcat(a_key, "\"");
                                                                                            $<str>$=a_key;
                                                                                            free($<str>1);
                                                                                        }
                                |key COLON key                                          {
                                                                                            char *a_key;
                                                                                            a_key = (char*) calloc(strlen($<str>1)+strlen($<str>3)+28, sizeof(char));
                                                                                            strcpy(a_key, "\"namespace\": \"");
                                                                                            strcat(a_key, $<str>1);
                                                                                            strcat(a_key, "\", \"name\": \"");
                                                                                            strcat(a_key, $<str>3);
                                                                                            strcat(a_key, "\"");
                                                                                            $<str>$=a_key;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
attribute_value:                STRING                                                  {}
node_end:                       OPEN_TAG SLASH node_name CLOSE_TAG                      
node_name:                      key                                                     {
                                                                                            char *a_key;
                                                                                            a_key = (char*) calloc(strlen($<str>1)+11, sizeof(char));
                                                                                            strcat(a_key, "\"name\": \"");
                                                                                            strcat(a_key, $<str>1);
                                                                                            strcat(a_key, "\"");
                                                                                            $<str>$=a_key;
                                                                                            free($<str>1);
                                                                                        }
                                |key COLON key                                          {
                                                                                            char *a_key;
                                                                                            a_key = (char*) calloc(strlen($<str>1)+strlen($<str>3)+28, sizeof(char));
                                                                                            strcpy(a_key, "\"namespace\": \"");
                                                                                            strcat(a_key, $<str>1);
                                                                                            strcat(a_key, "\", \"name\": \"");
                                                                                            strcat(a_key, $<str>3);
                                                                                            strcat(a_key, "\"");
                                                                                            $<str>$=a_key;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
key:                            key HYPHEN ALNUM                                        {
                                                                                            char *key;
                                                                                            key = (char*) calloc(strlen($<str>1)+strlen($<str>1)+1, sizeof(char));
                                                                                            strcpy(key, $<str>1);
                                                                                            strcat(key, $<str>2);
                                                                                            strcat(key, $<str>3);
                                                                                            $<str>$=key;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                            free($<str>3);
                                                                                        }
                                | ALNUM                                                 {
                                                                                            char *key;
                                                                                            key = (char*) calloc(strlen($<str>1)+1, sizeof(char));
                                                                                            strcpy(key, $<str>1);
                                                                                            $<str>$=key;
                                                                                            free($<str>1);
                                                                                        }
text:                           text ALNUM                                              {
                                                                                            char *text;
                                                                                            text = (char*) calloc(strlen($<str>1)+strlen($<str>1)+1, sizeof(char));
                                                                                            strcpy(text, $<str>1);
                                                                                            strcat(text, $<str>2);
                                                                                            $<str>$=text;
                                                                                            free($<str>1);
                                                                                            free($<str>2);
                                                                                        }
                                | ALNUM                                                 {$<str>$=$<str>1;}
%%


void yyerror(char *s){
    extern int yyl, chno;
    printf("Invalid XML document. Error in line %d:%d\n", yyl, chno);
}