export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    /** @type {number} members - value: 11 */
    members: number =11;

    /** @type {number} baseColor - value: a3f4d5 (hexadecimal number) */
    baseColor: number = 0xa3f4d5;

    /** @type {number} role - value: 0b1001 (binary number) */
    role: number = 1001;

    /** @type {number} systemID - value: 0o7700 (octal number) */
    
systemid: number = 7700;
    /** @type {number} average - value: 4.5 */
    average: number = 4.5;

    /** @type {string} adminName - value: szabadon választott szöveg */
    adminName:string = 'hello'

    /** @type {string} sumPoints - value: 'Members have <this.members és a this.average szorzata> points' (template string) */

sumPoints: string =`Members have ${this.members * this.average} points`;
}
