#include "ODTDocumentWrapper.h"

Napi::FunctionReference ODTDocumentWrapper::constructor;

Napi::Object ODTDocumentWrapper::Init(Napi::Env env, Napi::Object exports) {
  Napi::HandleScope scope(env);

  Napi::Function func = DefineClass(env, "ODTDocumentWrapper", {
    InstanceMethod("display", &ODTDocumentWrapper::display),
  });

  constructor = Napi::Persistent(func);
  constructor.SuppressDestruct();

  exports.Set("ODTDocumentWrapper", func);
  return exports;
}

ODTDocumentWrapper::ODTDocumentWrapper(const Napi::CallbackInfo& info) : Napi::ObjectWrap<ODTDocumentWrapper>(info)  {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  int length = info.Length();
  if (length != 4 || !info[0].IsString()) {
    Napi::TypeError::New(env, "String expected").ThrowAsJavaScriptException();
  }

  Napi::String value0 = info[0].As<Napi::String>();
  Napi::String value1 = info[1].As<Napi::String>();
  Napi::String value2 = info[2].As<Napi::String>();
  Napi::String value3 = info[3].As<Napi::String>();
  this->odtdocument_ = new ODTDocument(value0.Utf8Value(), value1.Utf8Value(), value2.Utf8Value(), value3.Utf8Value());
}

Napi::Value ODTDocumentWrapper::display(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  std::string str = this->odtdocument_->display();
  return Napi::String::New(env, str);
}