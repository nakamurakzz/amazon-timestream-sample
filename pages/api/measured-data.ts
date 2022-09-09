// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { QueryCommand, QueryCommandInput, TimestreamQueryClient } from '@aws-sdk/client-timestream-query';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'GET') {
    const client = new TimestreamQueryClient({ region: "ap-northeast-1" });
    const queryCommand:QueryCommandInput = {
      QueryString: "select count(*) from iot.sensordata",
    }
    const apiRes = await client.send(new QueryCommand(queryCommand));
    // res.status(200).json({ data: apiRes })
  }
}
