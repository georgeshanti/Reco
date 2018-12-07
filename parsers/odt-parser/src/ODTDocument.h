#ifndef ODTDOCUMENT_H
#define ODTDOCUMENT_H

#include "rapidxml.hpp"
#include <napi.h>

class ODTDocument{
    private:
        std::string styles;
        std::string content;
        std::string meta_data;
        std::string images;

    public:
        ODTDocument(std::string, std::string, std::string, std::string);
        std::string display();
};

#endif