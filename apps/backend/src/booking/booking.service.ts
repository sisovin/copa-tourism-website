import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../notification/email.service';
import { PDFService } from '../notification/pdf.service';
import { PaymentService } from '../notification/payment.service';
import { SMSService } from '../notification/sms.service';

@Injectable()
export class BookingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly pdfService: PDFService,
    private readonly paymentService: PaymentService,
    private readonly smsService: SMSService,
  ) {}

  async createBooking(data: { userId: number; packageId: number; startDate: string; endDate: string }) {
    return await this.prisma.booking.create({ data });
  }

  async updateBooking(id: number, data: { startDate?: string; endDate?: string }) {
    return await this.prisma.booking.update({ where: { id }, data });
  }

  async deleteBooking(id: number) {
    return await this.prisma.booking.delete({ where: { id } });
  }

  async sendEmailNotification(email: string, subject: string, message: string) {
    await this.emailService.sendEmail(email, subject, message);
  }

  async generatePDFTicket(bookingId: number) {
    await this.pdfService.generatePDF(bookingId);
  }

  async processPayment(paymentDetails: any) {
    await this.paymentService.processPayment(paymentDetails);
  }

  async sendSMSNotification(phoneNumber: string, message: string) {
    await this.smsService.sendSMS(phoneNumber, message);
  }
}
