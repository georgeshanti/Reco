#include <napi.h>
#include "ODTDocument.h"

class ODTDocumentWrapper : public Napi::ObjectWrap<ODTDocumentWrapper> {
 public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports); //Init function for setting the export key to JS
  ODTDocumentWrapper(const Napi::CallbackInfo& info); //Constructor to initialise

 private:
  static Napi::FunctionReference constructor; //reference to store the class definition that needs to be exported to JS
  Napi::Value display(const Napi::CallbackInfo& info); //wrapped display function
  ODTDocument *odtdocument_; //internal instance of actualclass used to perform actual operations.
};