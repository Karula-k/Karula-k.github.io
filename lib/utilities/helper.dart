import 'package:flutter/material.dart';

// for web
import 'dart:html' as html;

import 'package:portoweb/utilities/constants.dart';

import 'enum.dart';

class CardScroll extends StatelessWidget {
  const CardScroll(
      {super.key,
      required this.title,
      required this.subtitle,
      required this.link,
      required this.img,
      required this.content});
  final String title;
  final String content;
  final String subtitle;
  final String link;
  final Logo img;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 200,
      width: 250,
      child: Card(
        elevation: 2,
        color: MyColor.White,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Stack(
              children: [
                Align(
                  alignment: Alignment.topRight,
                  child: Container(
                    color: img.color,
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(4, 4, 0, 4),
                      child: Text(
                        img.name,
                        style: const TextStyle(
                          fontSize: 12,
                          color: MyColor.graySubtitle,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Text(
              title,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              subtitle,
              style: const TextStyle(
                color: MyColor.graySubtitle,
              ),
            ),
            Text(
              content,
              textAlign: TextAlign.center,
            ),
            ElevatedButton.icon(
                style: ButtonStyle(
                    backgroundColor:
                        MaterialStateColor.resolveWith((states) => img.color)),
                onPressed: () {
                  html.window.open(link, "_blank");
                },
                icon: Image.asset(img.image, height: 20),
                label: const Text('More'))
          ],
        ),
      ),
    );
  }
}
