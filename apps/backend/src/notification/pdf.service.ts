import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

@Injectable()
export class PDFService {
  async generatePDF(bookingId: number) {
    const doc = new PDFDocument();
    const filePath = `./pdfs/booking_${bookingId}.pdf`;

    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(25).text('Booking Confirmation', { align: 'center' });
    doc.moveDown();
    doc.fontSize(18).text(`Booking ID: ${bookingId}`);
    doc.moveDown();
    doc.fontSize(14).text('Thank you for your booking. Please find the details below:');
    doc.moveDown();
    // Add more booking details here

    doc.end();

    console.log(`PDF generated successfully at ${filePath}`);
  }
}
