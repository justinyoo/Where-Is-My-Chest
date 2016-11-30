﻿"use strict";

var chests = [
  { "index": 0, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 1, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 2, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 3, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 4, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 5, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 6, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 7, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 8, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 9, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 10, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 11, "value": "M", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "magic" },
  { "index": 12, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 13, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 14, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 15, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 16, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 17, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 18, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 19, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 20, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 21, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 22, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 23, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 24, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 25, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 26, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 27, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 28, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 29, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 30, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 31, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 32, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 33, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 34, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 35, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 36, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 37, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 38, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 39, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 40, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 41, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 42, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 43, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 44, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 45, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 46, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 47, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 48, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 49, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 50, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 51, "value": "I", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "giant" },
  { "index": 52, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 53, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 54, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 55, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 56, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 57, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 58, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 59, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 60, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 61, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 62, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 63, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 64, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 65, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 66, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 67, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 68, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 69, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 70, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 71, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 72, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 73, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 74, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 75, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 76, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 77, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 78, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 79, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 80, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 81, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 82, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 83, "value": "M", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "magic" },
  { "index": 84, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 85, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 86, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 87, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 88, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 89, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 90, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 91, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 92, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 93, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 94, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 95, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 96, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 97, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 98, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 99, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 100, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 101, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 102, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 103, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 104, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 105, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 106, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 107, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 108, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 109, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 110, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 111, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 112, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 113, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 114, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 115, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 116, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 117, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 118, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 119, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 120, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 121, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 122, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 123, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 124, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 125, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 126, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 127, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 128, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 129, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 130, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 131, "value": "M", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "magic" },
  { "index": 132, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 133, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 134, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 135, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 136, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 137, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 138, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 139, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 140, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 141, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 142, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 143, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 144, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 145, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 146, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 147, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 148, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 149, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 150, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 151, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 152, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 153, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 154, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 155, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 156, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 157, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 158, "value": "I", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "giant" },
  { "index": 159, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 160, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 161, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 162, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 163, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 164, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 165, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 166, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 167, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 168, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 169, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 170, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 171, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 172, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 173, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 174, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 175, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 176, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 177, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 178, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 179, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 180, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 181, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 182, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 183, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 184, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 185, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 186, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 187, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 188, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 189, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 190, "value": "I", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "giant" },
  { "index": 191, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 192, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 193, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 194, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 195, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 196, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 197, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 198, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 199, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 200, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 201, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 202, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 203, "value": "M", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "magic" },
  { "index": 204, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 205, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 206, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 207, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 208, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 209, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 210, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 211, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 212, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 213, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 214, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 215, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 216, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 217, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 218, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 219, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 220, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 221, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 222, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 223, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 224, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 225, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 226, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 227, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 228, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 229, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 230, "value": "I", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "giant" },
  { "index": 231, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 232, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 233, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 234, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 235, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 236, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 237, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" },
  { "index": 238, "value": "G", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "gold" },
  { "index": 239, "value": "S", "placeholder": " ", "cssClassPlaceholder": "white", "cssClass": "silver" }
];