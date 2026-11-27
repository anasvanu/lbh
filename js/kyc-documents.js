/**
 * LBH Bullion - Official KYC Document Generator, Isolated Print & Word (.doc) Downloader
 * 
 * Formats user-provided data directly into authentic corporate legal documents matching
 * the official Microsoft Word templates on company letterhead.
 * 
 * Prints ONLY the filled document (completely isolating from website DOM/UI).
 * Downloads native Microsoft Word (.doc) files with user data pre-filled.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getVal(form, name, fallback = '______________________________') {
  if (!form) return fallback;
  const input = form.querySelector(`[name="${name}"]`);
  if (!input) return fallback;
  const val = input.value.trim();
  return val ? escapeHtml(val) : fallback;
}

function getRadioVal(form, name, fallback = 'No') {
  if (!form) return fallback;
  const input = form.querySelector(`[name="${name}"]:checked`);
  return input ? input.value : fallback;
}

function getFormattedDate() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${day} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

/**
 * Builds the inner HTML of the official document matching the original Word .docx files.
 */
function buildDocumentInnerHtml(type) {
  const dateStr = getFormattedDate();

  if (type === 'auth') {
    const form = document.getElementById('online-form-auth');
    const company = getVal(form, 'client_company', '[COMPANY / ENTITY LEGAL NAME]');
    const license = getVal(form, 'commercial_license', '_______________');
    const signatory = getVal(form, 'signatory_name', '______________________________');
    const nationality = getVal(form, 'signatory_nationality', '_______________');
    const signatoryId = getVal(form, 'signatory_id', '_______________');
    const designation = getVal(form, 'signatory_designation', 'Authorized Signatory / Managing Director');

    const off1Name = getVal(form, 'officer1_name', '______________________________');
    const off1Id = getVal(form, 'officer1_id', '_______________');
    const off1Phone = getVal(form, 'officer1_phone', '_______________');

    const off2Name = getVal(form, 'officer2_name', '');
    const off2Id = getVal(form, 'officer2_id', '');
    const off2Phone = getVal(form, 'officer2_phone', '');

    let officerRows = `
      <tr>
        <td style="border: 1px solid #000; padding: 7px; text-align: center;">1</td>
        <td style="border: 1px solid #000; padding: 7px; font-weight: bold;">${off1Name}</td>
        <td style="border: 1px solid #000; padding: 7px;">${off1Id}</td>
        <td style="border: 1px solid #000; padding: 7px; text-align: center; color: #888;">____________________</td>
        <td style="border: 1px solid #000; padding: 7px;">${off1Phone}</td>
      </tr>
    `;

    if (off2Name && off2Name !== '______________________________') {
      officerRows += `
        <tr>
          <td style="border: 1px solid #000; padding: 7px; text-align: center;">2</td>
          <td style="border: 1px solid #000; padding: 7px; font-weight: bold;">${off2Name}</td>
          <td style="border: 1px solid #000; padding: 7px;">${off2Id}</td>
          <td style="border: 1px solid #000; padding: 7px; text-align: center; color: #888;">____________________</td>
          <td style="border: 1px solid #000; padding: 7px;">${off2Phone}</td>
        </tr>
      `;
    }

    return `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 22px;">
        <h2 style="font-size: 16pt; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 1px;">${company}</h2>
        <p style="font-size: 10pt; color: #444; margin: 4px 0 0 0;">Commercial License / Registration No: <strong>${license}</strong></p>
        <p style="font-size: 8.5pt; color: #777; margin: 2px 0 0 0; font-style: italic;">[ OFFICIAL CORPORATE LETTERHEAD ]</p>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 18px; font-size: 10.5pt;">
        <div><strong>Ref:</strong> LBH/AUTH/${new Date().getFullYear()}</div>
        <div><strong>Date:</strong> <u>${dateStr}</u></div>
      </div>

      <div style="margin-bottom: 18px; font-size: 10.5pt; line-height: 1.45;">
        <strong>To:</strong><br>
        <strong>LBH Bullion Gold Trading L.L.C</strong><br>
        Office No. 403, Al Dhagaya Building, Al Ras, Deira<br>
        P.O. Box 64288, Dubai, United Arab Emirates
      </div>

      <div style="text-align: center; margin: 18px 0; font-size: 12pt; font-weight: bold; text-decoration: underline;">
        SUB: AUTHORIZATION LETTER
      </div>

      <p style="font-size: 10.5pt; line-height: 1.6; margin-bottom: 12px;">Dear Sir / Madam,</p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 14px;">
        I, the undersigned, Mr. <strong><u>${signatory}</u></strong>, of <strong><u>${nationality}</u></strong> nationality, holding Passport / Emirates ID Number: <strong><u>${signatoryId}</u></strong>, in my capacity as the Authorized Signatory of <strong><u>${company}</u></strong>, hereby authorize the following designated personnel individually to operate our trading account and execute transactions with <strong>LBH Bullion Gold Trading L.L.C</strong>.
      </p>

      <p style="font-size: 10.5pt; line-height: 1.6; margin-bottom: 8px;">They have full authority to:</p>
      <ul style="font-size: 10pt; line-height: 1.6; margin-top: 0; margin-bottom: 14px; padding-left: 26px;">
        <li>Fix gold and silver market prices and confirm physical trading orders.</li>
        <li>Deliver physical bullion and precious metals to your premises.</li>
        <li>Take delivery of physical bullion, gold bars, and coins on our behalf.</li>
        <li>Sign all delivery notes, vouchers, statements of accounts, and trade execution documents.</li>
        <li>Sign / issue receipts, invoices, and vouchers in connection with precious metals delivery and settlements.</li>
        <li>Collect cheques, electronic wire settlements, or cash in connection with the delivery and settlement of gold.</li>
      </ul>

      <p style="font-size: 10pt; font-weight: bold; margin-bottom: 6px;">Authorized Specimen Signatures Table:</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 9.5pt;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #000; padding: 6px; width: 35px; text-align: center;">S.N.</th>
            <th style="border: 1px solid #000; padding: 6px; text-align: left;">Full Legal Name</th>
            <th style="border: 1px solid #000; padding: 6px; text-align: left;">Passport / EID No.</th>
            <th style="border: 1px solid #000; padding: 6px; width: 140px; text-align: center;">Specimen Signature</th>
            <th style="border: 1px solid #000; padding: 6px; text-align: left;">Contact Mobile</th>
          </tr>
        </thead>
        <tbody>
          ${officerRows}
        </tbody>
      </table>

      <p style="font-size: 10pt; line-height: 1.5; margin-bottom: 25px; text-align: justify;">
        This authorization letter shall remain legally valid and binding on our company until formal written notice of revocation is received and acknowledged in writing by LBH Bullion Gold Trading L.L.C.
      </p>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 30px; page-break-inside: avoid;">
        <div style="width: 60%;">
          <p style="font-size: 10pt; margin: 0 0 4px 0;">Yours truly,</p>
          <p style="font-size: 10.5pt; font-weight: bold; margin: 0 0 40px 0;">For and on behalf of: ${company}</p>
          <div style="border-top: 1px solid #000; width: 230px; padding-top: 5px;">
            <p style="font-size: 10pt; font-weight: bold; margin: 0;">Authorized Signatory: ${signatory}</p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Designation: ${designation}</p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Date: ${dateStr}</p>
          </div>
        </div>
        <div style="width: 35%; text-align: center;">
          <div style="border: 2px dashed #888; width: 140px; height: 95px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 9pt; color: #666; border-radius: 4px;">
            [ Official Company Stamp ]
          </div>
        </div>
      </div>
    `;
  }

  if (type === 'funds') {
    const form = document.getElementById('online-form-funds');
    const entity = getVal(form, 'entity_name', '[CLIENT / ENTITY LEGAL NAME]');
    const signatory = getVal(form, 'signatory_name', '______________________________');
    const designation = getVal(form, 'designation', 'Authorized Signatory / Finance Director');
    const email = getVal(form, 'email', 'compliance@company.com');
    const purpose = getVal(form, 'purpose', 'Purchase and settlement of investment-grade gold bars and bullion products');
    const origin = getVal(form, 'funds_origin', 'Commercial Business Trading Income');

    return `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 22px;">
        <h2 style="font-size: 16pt; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 1px;">${entity}</h2>
        <p style="font-size: 8.5pt; color: #777; margin: 4px 0 0 0; font-style: italic;">[ OFFICIAL CORPORATE LETTERHEAD ]</p>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 10.5pt;">
        <div><strong>Ref:</strong> LBH/SOF/${new Date().getFullYear()}</div>
        <div><strong>Date:</strong> <u>${dateStr}</u></div>
      </div>

      <div style="margin-bottom: 20px; font-size: 10.5pt; line-height: 1.45;">
        <strong>TO:</strong><br>
        <strong>LBH Bullion Gold Trading L.L.C</strong><br>
        Office No. 403, Al Dhagaya Building, Al Ras, Deira<br>
        P.O. Box 64288, Dubai, United Arab Emirates
      </div>

      <div style="text-align: center; margin: 20px 0; font-size: 12pt; font-weight: bold; text-decoration: underline;">
        SUBJECT: DECLARATION - SOURCE OF FUNDS
      </div>

      <p style="font-size: 10.5pt; line-height: 1.6; margin-bottom: 12px;">Dear Sir / Madam,</p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 14px;">
        We are writing this official declaration to formally confirm and certify the legitimate origin and nature of funds utilized for precious metals transactions conducted with <strong>LBH Bullion Gold Trading L.L.C</strong>.
      </p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 14px;">
        <strong>1. Purpose of Transactions:</strong><br>
        The funds utilized by our company are exclusively dedicated for the purpose of: <strong><u>${purpose}</u></strong>.
      </p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 14px;">
        <strong>2. Nature and Origin of Funds:</strong><br>
        The funds utilized have been legitimately acquired through: <strong><u>${origin}</u></strong>. We unequivocally declare and warrant that all funds are genuine, legitimate, and do not originate from, nor are linked to, any unlawful conduct, money laundering, terrorist financing, corruption, or proceeds of crime.
      </p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 14px;">
        <strong>3. Regulatory Compliance:</strong><br>
        We understand that LBH Bullion Gold Trading L.L.C has a strict regulatory obligation to comply with the AML/CFT laws and regulations of the United Arab Emirates, specifically Federal Decree-Law No. (20) of 2018, Cabinet Decision No. (10) of 2019, and the Ministry of Economy Guidelines for the Precious Metals and Stones sector.
      </p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 25px;">
        <strong>4. Supporting Proofs Undertaking:</strong><br>
        We formally confirm that we will provide official audited financial statements, commercial contracts, source bank statements, or any further documentary proofs to verify this declaration immediately upon request.
      </p>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 35px; page-break-inside: avoid;">
        <div style="width: 60%;">
          <p style="font-size: 10pt; margin: 0 0 4px 0;">Sincerely,</p>
          <p style="font-size: 10.5pt; font-weight: bold; margin: 0 0 40px 0;">For and on behalf of: ${entity}</p>
          <div style="border-top: 1px solid #000; width: 230px; padding-top: 5px;">
            <p style="font-size: 10pt; font-weight: bold; margin: 0;">Authorized Signature: ____________________</p>
            <p style="font-size: 9.5pt; margin: 3px 0 0 0;">Name: <strong>${signatory}</strong></p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Designation: ${designation}</p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Email: ${email}</p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Date: ${dateStr}</p>
          </div>
        </div>
        <div style="width: 35%; text-align: center;">
          <div style="border: 2px dashed #888; width: 140px; height: 95px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 9pt; color: #666; border-radius: 4px;">
            [ Corporate Stamp ]
          </div>
        </div>
      </div>
    `;
  }

  if (type === 'pep') {
    const form = document.getElementById('online-form-pep');
    const declarant = getVal(form, 'pep_declarant_name', '______________________________');
    const company = getVal(form, 'pep_company_name', '[CLIENT / ENTITY LEGAL NAME]');
    const designation = getVal(form, 'pep_designation', 'Managing Director / Beneficial Owner');
    const isPep = getRadioVal(form, 'is_pep', 'No');
    const relatedPep = getRadioVal(form, 'related_to_pep', 'No');
    const details = getVal(form, 'pep_details', 'None / N/A');

    return `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 18px;">
        <h2 style="font-size: 14pt; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">POLITICALLY EXPOSED PERSON (PEP) DECLARATION FORM</h2>
        <p style="font-size: 9pt; color: #555; margin: 4px 0 0 0;">Compliance with UAE AML/CFT Regulations & FATF Recommendations</p>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 10pt;">
        <div><strong>Entity Name:</strong> <strong>${company}</strong></div>
        <div><strong>Date:</strong> <u>${dateStr}</u></div>
      </div>

      <p style="font-size: 9.5pt; line-height: 1.55; text-align: justify; margin-bottom: 12px; color: #222;">
        The information in this form is collected to comply with Anti-Money Laundering (AML), Counter-Terrorism Financing (CFT), and Proceeds of Unlawful Activities requirements under the regulatory framework of the United Arab Emirates.
      </p>

      <div style="background-color: #f7f7f7; border: 1px solid #ccc; padding: 10px; margin-bottom: 16px; font-size: 9pt; line-height: 1.5;">
        <strong>Definition:</strong> A Politically Exposed Person (PEP) is an individual who is or who has been entrusted with prominent public functions domestically or by a foreign government, including:
        <ol style="margin: 4px 0 0 0; padding-left: 20px;">
          <li>Head of State or Head of Government</li>
          <li>Senior politician, minister, or parliamentarian</li>
          <li>Senior government, judicial, central banking, or military official</li>
          <li>Member of a ruling royal family</li>
          <li>Senior executive of a state-owned enterprise or government-linked entity</li>
          <li>Important political party official</li>
        </ol>
        <em>Note: The definition includes immediate family members, relatives, personal advisers, or close business associates.</em>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 9.5pt;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #000; padding: 6px 10px; text-align: left;">Verification Question</th>
            <th style="border: 1px solid #000; padding: 6px 10px; width: 140px; text-align: center;">Declaration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #000; padding: 8px 10px;">
              <strong>1. Are you or any beneficial owner/director of the company a Politically Exposed Person (PEP)?</strong>
            </td>
            <td style="border: 1px solid #000; padding: 8px 10px; text-align: center; font-weight: bold;">
              ${isPep === 'Yes' ? '[ X ] YES &nbsp;&nbsp; [ &nbsp; ] NO' : '[ &nbsp; ] YES &nbsp;&nbsp; [ X ] NO'}
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 8px 10px;">
              <strong>2. Are you or the entity related to, or in close personal/business partnership with a PEP?</strong>
            </td>
            <td style="border: 1px solid #000; padding: 8px 10px; text-align: center; font-weight: bold;">
              ${relatedPep === 'Yes' ? '[ X ] YES &nbsp;&nbsp; [ &nbsp; ] NO' : '[ &nbsp; ] YES &nbsp;&nbsp; [ X ] NO'}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="border: 1px solid #000; padding: 8px 10px; margin-bottom: 16px; font-size: 9.5pt;">
        <strong>3. If YES to either question, specify profile, relationship, government entity, and jurisdiction:</strong>
        <p style="margin: 5px 0 0 0; color: #222; font-style: italic;">${details}</p>
      </div>

      <div style="margin-bottom: 20px; font-size: 9.5pt; line-height: 1.5; text-align: justify;">
        <strong>DECLARATION:</strong><br>
        I hereby formally certify and declare that the details and answers provided above are complete, true, and accurate to the best of my knowledge. I undertake to notify <strong>LBH Bullion Gold Trading L.L.C</strong> in writing within fourteen (14) calendar days of any material change in PEP status.
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 25px; page-break-inside: avoid;">
        <div style="width: 60%;">
          <div style="border-top: 1px solid #000; width: 240px; padding-top: 5px;">
            <p style="font-size: 9.5pt; font-weight: bold; margin: 0;">Declarant Name: ${declarant}</p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Company Name: ${company}</p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Designation: ${designation}</p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Signature: ______________________________</p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Date: ${dateStr}</p>
          </div>
        </div>
        <div style="width: 35%; text-align: center;">
          <div style="border: 2px dashed #888; width: 130px; height: 90px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 8.5pt; color: #666; border-radius: 4px;">
            [ Company Stamp ]
          </div>
        </div>
      </div>
    `;
  }

  if (type === 'sanctions') {
    const form = document.getElementById('online-form-sanctions');
    const declarant = getVal(form, 'sanctions_declarant_name', '______________________________');
    const company = getVal(form, 'sanctions_company_name', '[CLIENT / ENTITY LEGAL NAME]');
    const nationality = getVal(form, 'sanctions_nationality', '_______________');
    const idNo = getVal(form, 'sanctions_id_no', '_______________');
    const designation = getVal(form, 'sanctions_designation', 'Owner & Ultimate Beneficial Owner (UBO)');

    return `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="font-size: 15pt; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">${company}</h2>
        <p style="font-size: 8.5pt; color: #777; margin: 4px 0 0 0; font-style: italic;">[ OFFICIAL CORPORATE LETTERHEAD ]</p>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 18px; font-size: 10.5pt;">
        <div><strong>Ref:</strong> LBH/SANCT/${new Date().getFullYear()}</div>
        <div><strong>Date:</strong> <u>${dateStr}</u></div>
      </div>

      <div style="margin-bottom: 18px; font-size: 10.5pt; line-height: 1.45;">
        <strong>TO WHOMSOEVER IT MAY CONCERN /</strong><br>
        <strong>LBH Bullion Gold Trading L.L.C</strong><br>
        Office No. 403, Al Dhagaya Building, Al Ras, Deira, Dubai, UAE
      </div>

      <div style="text-align: center; margin: 18px 0; font-size: 12pt; font-weight: bold; text-decoration: underline;">
        UNDERTAKING LETTER - SANCTIONS & TRADE EMBARGOES
      </div>

      <p style="font-size: 10.5pt; line-height: 1.6; margin-bottom: 12px;">Dear Sir,</p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 14px;">
        I, <strong><u>${declarant}</u></strong>, of <strong><u>${nationality}</u></strong> nationality, having Passport / Emirates ID Number: <strong><u>${idNo}</u></strong>, in my capacity as Owner & Ultimate Beneficial Owner (UBO) / Authorized Representative of <strong><u>${company}</u></strong>, hereby confirm and warrant that neither of our entities nor any of our related parties are dealing with sanctioned countries or designated persons.
      </p>

      <p style="font-size: 10.5pt; line-height: 1.7; text-align: justify; margin-bottom: 12px;">
        We specifically undertake and declare that:
      </p>
      <ul style="font-size: 10pt; line-height: 1.6; margin-top: 0; margin-bottom: 16px; padding-left: 24px;">
        <li>Neither our company, directors, nor shareholders are listed on the UAE National Sanctions List, UN Security Council Sanctions, US OFAC Specially Designated Nationals (SDN), EU Consolidated Financial Sanctions, or UK OFSI lists.</li>
        <li>Our company is not owned or controlled by, nor operating as an agent of, the Governments of Iran, North Korea, Syria, Cuba, Myanmar, or the occupied regions of Ukraine (Crimea, Sevastopol, Donetsk, Luhansk).</li>
        <li>No funds, bullion, or settlement assets involved in transactions with LBH Bullion Gold Trading L.L.C originate from unlawful conduct, money laundering, extortion, or terrorist financing.</li>
        <li>Our company complies strictly with UAE Federal Decree-Law No. (20) of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism.</li>
        <li>We shall immediately inform LBH Bullion Gold Trading L.L.C in writing if any material change occurs in our sanctions or regulatory standing.</li>
      </ul>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 35px; page-break-inside: avoid;">
        <div style="width: 60%;">
          <p style="font-size: 10pt; margin: 0 0 4px 0;">Yours faithfully,</p>
          <p style="font-size: 10.5pt; font-weight: bold; margin: 0 0 40px 0;">For and on behalf of: ${company}</p>
          <div style="border-top: 1px solid #000; width: 230px; padding-top: 5px;">
            <p style="font-size: 10pt; font-weight: bold; margin: 0;">Authorized Signature: ____________________</p>
            <p style="font-size: 9.5pt; margin: 3px 0 0 0;">Name: <strong>${declarant}</strong></p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Title: ${designation}</p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Passport / ID: ${idNo}</p>
            <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0 0;">Date: ${dateStr}</p>
          </div>
        </div>
        <div style="width: 35%; text-align: center;">
          <div style="border: 2px dashed #888; width: 140px; height: 95px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 9pt; color: #666; border-radius: 4px;">
            [ Corporate Stamp ]
          </div>
        </div>
      </div>
    `;
  }

  if (type === 'supply') {
    const form = document.getElementById('online-form-supply');
    const company = getVal(form, 'supply_company_name', '[SUPPLIER / CLIENT COMPANY NAME]');
    const signatory = getVal(form, 'supply_signatory_name', '______________________________');
    const designation = getVal(form, 'supply_designation', 'Managing Director / Compliance Officer');
    const license = getVal(form, 'supply_license_no', '_______________');

    return `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="font-size: 15pt; font-weight: bold; margin: 0; text-transform: uppercase;">${company}</h2>
        <p style="font-size: 9pt; color: #555; margin: 4px 0 0 0;">Commercial Registration: ${license}</p>
        <p style="font-size: 8.5pt; color: #777; margin: 2px 0 0 0; font-style: italic;">[ OFFICIAL CORPORATE LETTERHEAD ]</p>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 18px; font-size: 10pt;">
        <div><strong>Ref:</strong> LBH/SUPPLY/${new Date().getFullYear()}</div>
        <div><strong>Date:</strong> <u>${dateStr}</u></div>
      </div>

      <div style="text-align: center; margin: 18px 0; font-size: 12pt; font-weight: bold; text-decoration: underline;">
        SUPPLY CHAIN POLICY - DECLARATION AND UNDERTAKING
      </div>

      <p style="font-size: 10pt; line-height: 1.6; text-align: justify; margin-bottom: 12px;">
        <strong>${company}</strong> is committed to conducting all business activities with integrity, transparency, and adherence to the highest ethical and professional standards. We recognize our shared responsibility with <strong>LBH Bullion Gold Trading L.L.C</strong> to maintain a conflict-free, responsible, and transparent supply chain in precious metals trading.
      </p>

      <p style="font-size: 10pt; line-height: 1.6; text-align: justify; margin-bottom: 12px;">
        Our company fully aligns with and commits to the <strong>OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas</strong>, DMCC Responsible Sourcing Review Protocol, and UAE Ministry of Economy regulations.
      </p>

      <p style="font-size: 10pt; font-weight: bold; margin-bottom: 6px;">UNDERTAKING COMMITMENTS:</p>
      <ul style="font-size: 9.5pt; line-height: 1.6; margin-top: 0; margin-bottom: 16px; padding-left: 22px;">
        <li>We have implemented an adequate supply chain due diligence system in accordance with the OECD 5-Step Due Diligence Framework.</li>
        <li>We comply with all applicable national and international laws and regulations governing the trade of precious metals.</li>
        <li>We do not source, transport, or trade precious metals originating from conflict-affected, high-risk, or sanctioned areas without enhanced due diligence.</li>
        <li>We do not tolerate human rights abuses, forced labor, direct or indirect support to non-state armed groups, bribery, or illegal mineral extortion.</li>
        <li>We maintain complete, auditable transaction and KYC records for a minimum statutory period of five (5) years.</li>
      </ul>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 30px; page-break-inside: avoid;">
        <div style="width: 60%;">
          <p style="font-size: 10pt; margin: 0 0 4px 0;">By signing this document, we confirm full adherence:</p>
          <p style="font-size: 10pt; font-weight: bold; margin: 0 0 35px 0;">Company: ${company}</p>
          <div style="border-top: 1px solid #000; width: 230px; padding-top: 5px;">
            <p style="font-size: 9.5pt; font-weight: bold; margin: 0;">Authorized Signature: ____________________</p>
            <p style="font-size: 9pt; margin: 2px 0 0 0;">Name: <strong>${signatory}</strong></p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Title: ${designation}</p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Date: ${dateStr}</p>
          </div>
        </div>
        <div style="width: 35%; text-align: center;">
          <div style="border: 2px dashed #888; width: 130px; height: 90px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 8.5pt; color: #666; border-radius: 4px;">
            [ Official Stamp ]
          </div>
        </div>
      </div>
    `;
  }

  if (type === 'cdd') {
    const form = document.getElementById('online-form-cdd');
    const name = getVal(form, 'cdd_full_name', '______________________________');
    const nationality = getVal(form, 'cdd_nationality', '_______________');
    const idNo = getVal(form, 'cdd_id_no', '_______________');
    const dob = getVal(form, 'cdd_dob', '_______________');
    const address = getVal(form, 'cdd_address', '_______________');
    const phone = getVal(form, 'cdd_phone', '_______________');
    const email = getVal(form, 'cdd_email', '_______________');
    const occupation = getVal(form, 'cdd_occupation', '_______________');
    const sourceFunds = getVal(form, 'cdd_source_funds', 'Business Commercial Activity');
    const annualTurnover = getVal(form, 'cdd_annual_turnover', 'Above AED 1,000,000');

    return `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 18px;">
        <h2 style="font-size: 14pt; font-weight: bold; margin: 0; text-transform: uppercase;">CUSTOMER DUE DILIGENCE (CDD) FORM</h2>
        <p style="font-size: 9pt; color: #555; margin: 3px 0 0 0;">LBH Bullion Gold Trading L.L.C - AML/CFT KYC Profile</p>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 14px; font-size: 9.5pt;">
        <div><strong>Record Ref:</strong> LBH/CDD/${new Date().getFullYear()}</div>
        <div><strong>Date:</strong> <u>${dateStr}</u></div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 9pt;">
        <tbody>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; width: 25%; background-color: #f7f7f7;"><strong>Full Legal Name:</strong></td>
            <td style="border: 1px solid #000; padding: 6px; width: 75%;" colspan="3"><strong>${name}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Nationality:</strong></td>
            <td style="border: 1px solid #000; padding: 6px; width: 25%;"><strong>${nationality}</strong></td>
            <td style="border: 1px solid #000; padding: 6px; width: 20%; background-color: #f7f7f7;"><strong>Date of Birth:</strong></td>
            <td style="border: 1px solid #000; padding: 6px; width: 30%;"><strong>${dob}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Passport / EID No:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;" colspan="3"><strong>${idNo}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Residential Address:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;" colspan="3">${address}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Mobile Phone:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">${phone}</td>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Email Address:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">${email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Occupation / Company:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;" colspan="3">${occupation}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Source of Funds:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">${sourceFunds}</td>
            <td style="border: 1px solid #000; padding: 6px; background-color: #f7f7f7;"><strong>Expected Turnover:</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">${annualTurnover}</td>
          </tr>
        </tbody>
      </table>

      <div style="font-size: 9pt; line-height: 1.5; margin-bottom: 20px; text-align: justify;">
        <strong>CUSTOMER DECLARATION:</strong><br>
        I hereby certify that all information and particulars provided in this Customer Due Diligence profile are true, complete, and accurate. I consent to LBH Bullion Gold Trading L.L.C verifying these details against official sanction registers, government databases, and commercial registries in compliance with UAE Anti-Money Laundering and Counter-Terrorist Financing regulations.
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 25px; page-break-inside: avoid;">
        <div style="width: 60%;">
          <div style="border-top: 1px solid #000; width: 230px; padding-top: 5px;">
            <p style="font-size: 9.5pt; font-weight: bold; margin: 0;">Customer Signature: ____________________</p>
            <p style="font-size: 9pt; margin: 2px 0 0 0;">Name: <strong>${name}</strong></p>
            <p style="font-size: 9pt; color: #444; margin: 2px 0 0 0;">Date: ${dateStr}</p>
          </div>
        </div>
        <div style="width: 35%; text-align: center;">
          <div style="border: 2px dashed #888; width: 130px; height: 85px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 8.5pt; color: #666; border-radius: 4px;">
            [ LBH Compliance Stamp ]
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

/**
 * Generates the full standalone document HTML (for isolated printing or Word .doc export).
 */
function generateDocumentHtml(type, forWord = false) {
  const titles = {
    auth: 'LBH Bullion - Account Authorization Letter',
    funds: 'LBH Bullion - Declaration Source of Funds',
    pep: 'LBH Bullion - PEP Declaration Form',
    sanctions: 'LBH Bullion - Sanctions Undertaking Letter',
    supply: 'LBH Bullion - Supply Chain Policy Undertaking',
    cdd: 'LBH Bullion - Customer Due Diligence Form'
  };

  const title = titles[type] || 'LBH Bullion Compliance Document';
  const innerHtml = buildDocumentInnerHtml(type);

  if (forWord) {
    return `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${title}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page { size: 21cm 29.7cm; margin: 2cm 2cm 2cm 2cm; mso-page-orientation: portrait; }
          body { font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.5; color: #000; }
          table { border-collapse: collapse; width: 100%; margin: 15px 0; }
          th, td { border: 1px solid #000; padding: 6px 10px; font-size: 10pt; }
          th { background-color: #f2f2f2; font-weight: bold; }
        </style>
      </head>
      <body>
        ${innerHtml}
      </body>
      </html>
    `.trim();
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 18mm 20mm;
        }
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Times New Roman', Times, Georgia, serif;
          font-size: 11pt;
          line-height: 1.5;
          color: #000;
          margin: 0;
          padding: 0;
          background: #fff;
        }
        .doc-page {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #000;
          padding: 6px 8px;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        @media print {
          body {
            background: #fff !important;
            color: #000 !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="doc-page">
        ${innerHtml}
      </div>
    </body>
    </html>
  `.trim();
}

/**
 * Triggers printing of ONLY the filled Word document using an isolated iframe.
 * ZERO website content (no headers, no tabs, no buttons, no footers) is printed.
 */
function printOfficialDocument(type) {
  const fullHtml = generateDocumentHtml(type, false);
  const innerHtml = buildDocumentInnerHtml(type);

  // Update in-page fallback print sheet for Ctrl+P
  const sheet = document.getElementById('document-print-sheet');
  if (sheet) {
    sheet.innerHTML = innerHtml;
  }

  // Create or reuse hidden isolated print iframe
  let frame = document.getElementById('document-print-iframe');
  if (!frame) {
    frame = document.createElement('iframe');
    frame.id = 'document-print-iframe';
    frame.style.position = 'fixed';
    frame.style.right = '0';
    frame.style.bottom = '0';
    frame.style.width = '0';
    frame.style.height = '0';
    frame.style.border = '0';
    frame.style.visibility = 'hidden';
    document.body.appendChild(frame);
  }

  const doc = frame.contentWindow.document;
  doc.open();
  doc.write(fullHtml);
  doc.close();

  // Trigger print dialog on iframe window
  setTimeout(() => {
    frame.contentWindow.focus();
    frame.contentWindow.print();
  }, 350);
}

/**
 * Generates and downloads a native Microsoft Word (.doc) file pre-filled with the user's data.
 */
function downloadFilledWordDoc(type) {
  const fileNames = {
    auth: 'LBH_Authorization_Letter_Filled.doc',
    funds: 'LBH_Declaration_Source_of_Funds_Filled.doc',
    pep: 'LBH_PEP_Declaration_Filled.doc',
    sanctions: 'LBH_Sanctions_Undertaking_Filled.doc',
    supply: 'LBH_Supply_Chain_Policy_Filled.doc',
    cdd: 'LBH_Customer_Due_Diligence_Filled.doc'
  };

  const fileName = fileNames[type] || 'LBH_Compliance_Document_Filled.doc';
  const wordContent = generateDocumentHtml(type, true);

  const blob = new Blob(['\ufeff', wordContent], {
    type: 'application/msword;charset=utf-8'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
