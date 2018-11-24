y.tab.c: xml_cfg.yacc
	yacc -d $? -o $@
	
lex.yy.c: xml_tokens.l
	lex $?
	
driver.out: driver.cpp y.tab.c y.tab.h lex.yy.c
	$(CXX) $? -o $@

clean:
	rm y.tab.c y.tab.h lex.yy.c driver.out