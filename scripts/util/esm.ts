/*
 * 🐻‍❄️📦 clippy-action: GitHub action to run Clippy, an up-to-date and modern version of actions-rs/clippy
 * Copyright 2023 Noel Towa <cutie@floofy.dev>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { Lazy } from '@noelware/utils';

/** Alias for CommonJS' `__filename` */
export const __filename = new Lazy(() => fileURLToPath(import.meta.url));

/** Alias for CommonJS' `__dirname` */
export const __dirname = new Lazy(() => dirname(resolve(__filename.get(), '..')));
