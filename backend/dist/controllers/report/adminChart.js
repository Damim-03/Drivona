import prisma from "../../services/db/prismaClient.js";
const adminChart = async (req, res) => {
    const currentYear = new Date().getFullYear();
    let [from1To2, from3To4, from5To6, from7To8, from9To10, from11To12] = await Promise.all([
        prisma.payment.aggregate({
            where: {
                paymentDate: {
                    gte: `${currentYear}-01-01`,
                    lte: `${currentYear}-02-29`,
                }
            },
            _sum: {
                paymentAmount: true
            }
        }),
        prisma.payment.aggregate({
            where: {
                paymentDate: {
                    gte: `${currentYear}-03-01`,
                    lte: `${currentYear}-04-30`,
                }
            },
            _sum: {
                paymentAmount: true
            }
        }),
        prisma.payment.aggregate({
            where: {
                paymentDate: {
                    gte: `${currentYear}-05-01`,
                    lte: `${currentYear}-06-30`,
                }
            },
            _sum: {
                paymentAmount: true
            }
        }),
        prisma.payment.aggregate({
            where: {
                paymentDate: {
                    gte: `${currentYear}-07-01`,
                    lte: `${currentYear}-08-31`,
                }
            },
            _sum: {
                paymentAmount: true
            }
        }),
        prisma.payment.aggregate({
            where: {
                paymentDate: {
                    gte: `${currentYear}-09-01`,
                    lte: `${currentYear}-10-31`,
                }
            },
            _sum: {
                paymentAmount: true
            }
        }),
        prisma.payment.aggregate({
            where: {
                paymentDate: {
                    gte: `${currentYear}-11-01`,
                    lte: `${currentYear}-12-31`,
                }
            },
            _sum: {
                paymentAmount: true
            }
        }),
    ]);
    const from1To2Amount = from1To2._sum.paymentAmount || 0;
    const from3To4Amount = from3To4._sum.paymentAmount || 0;
    const from5To6Amount = from5To6._sum.paymentAmount || 0;
    const from7To8Amount = from7To8._sum.paymentAmount || 0;
    const from9To10Amount = from9To10._sum.paymentAmount || 0;
    const from11To12Amount = from11To12._sum.paymentAmount || 0;
    res.status(200).json({
        ok: true,
        data: {
            janFeb: from1To2Amount,
            marApr: from3To4Amount,
            mayJun: from5To6Amount,
            julAug: from7To8Amount,
            sepOct: from9To10Amount,
            novDec: from11To12Amount
        }
    });
};
export default adminChart;
