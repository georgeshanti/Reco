/* cppsrc/main.cpp */
#include <napi.h>
#include "src/ODTDocumentWrapper.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return ODTDocumentWrapper::Init(env, exports);
}

NODE_API_MODULE(odtParser, InitAll)