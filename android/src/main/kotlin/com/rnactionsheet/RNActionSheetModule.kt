package com.rnactionsheet

import android.app.AlertDialog
import android.content.Context
import android.widget.ArrayAdapter
import com.facebook.react.bridge.*

class RNActionSheetModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun open(title: String?, message: String?, buttons: ReadableArray?, promise: Promise) {
    val context: Context = currentActivity ?: return
    AlertDialog.Builder(context).run {
      setTitle(title)
//      setMessage(message)
      setCancelable(false)
      val adapter = ArrayAdapter<String>(context, android.R.layout.simple_selectable_list_item)
      buttons?.let {
        for (i in 0 until it.size()) {
          val button = it.getMap(i)

          @Suppress("NAME_SHADOWING")
          val title = button.getString("text")

          if (button.getString("style") == "cancel") {
            setNegativeButton(title) { _, _ ->
              promise.resolve(i)
            }
            setOnDismissListener {
              promise.resolve(i)
            }
            setCancelable(true)
          } else {
            adapter.add(title!!)
          }
        }

        setAdapter(adapter) { _, which ->
          promise.resolve(which)
        }
      }

      show()
    }

  }

  companion object {
    const val NAME = "RNActionSheetManager"
  }
}
