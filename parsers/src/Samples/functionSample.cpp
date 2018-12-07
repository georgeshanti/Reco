#include "functionSample.h"

std::string functionexample::hello(){
    return "Hello World";
}

Napi::String functionexample::HelloWrapped(const Napi::CallbackInfo& info) 
{
    Napi::Env env = info.Env();
    Napi::String returnValue = Napi::String::New(env, functionexample::hello());

    return returnValue;
}

Napi::Object functionexample::Init(Napi::Env env, Napi::Object exports) 
{
    exports.Set(
        "hello", Napi::Function::New(env, functionexample::HelloWrapped)
    );

    return exports;
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return functionexample::Init(env, exports);
}

NODE_API_MODULE(documentParser, InitAll)