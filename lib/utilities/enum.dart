import 'package:flutter/material.dart';
import 'package:portoweb/utilities/constants.dart';

enum Logo { flutter, machineLearning, backEnd }

extension LogoExtension on Logo {
  String get image {
    switch (this) {
      case Logo.flutter:
        return 'assets/img/flutter.png';
      case Logo.machineLearning:
        return 'assets/img/tensorflow-icon.png';
      case Logo.backEnd:
        return 'assets/img/backend.png';
      default:
        return 'assets/img/qr-code.png';
    }
  }

  Color get color {
    switch (this) {
      case Logo.flutter:
        return MyColor.biruDark;
      case Logo.backEnd:
        return MyColor.biruLight;
      case Logo.machineLearning:
        return MyColor.whiteBG;
    }
  }
}
